#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: node scripts/validate-report.mjs <report-or-json> [...]

Validates Xray output for common failures:
- missing leading verdict/confidence lines
- blank or placeholder source fields
- missing best finding section
- markdown image/chart attachments
- direct trading instruction language
`);
  process.exit(0);
}

const REPORT_KEYS = new Set(["response", "report", "output", "xray_response"]);
const SOURCE_LABELS = ["Website/docs", "X/social", "GitHub/code"];

let failed = false;

for (const file of args) {
  const absolute = path.resolve(file);
  const text = fs.readFileSync(absolute, "utf8");
  const reports = extractReports(text, absolute);

  if (reports.length === 0) {
    failed = true;
    printFinding(absolute, "file", "No report strings found.");
    continue;
  }

  for (const report of reports) {
    const findings = validateReport(report.text);
    if (findings.length > 0) {
      failed = true;
      for (const finding of findings) {
        printFinding(absolute, report.label, finding);
      }
    }
  }
}

process.exit(failed ? 1 : 0);

function extractReports(text, file) {
  if (file.endsWith(".json")) {
    try {
      const parsed = JSON.parse(text);
      const reports = [];
      walkJson(parsed, "$", reports);
      return reports;
    } catch {
      return [{ label: "text", text }];
    }
  }

  return [{ label: "text", text }];
}

function walkJson(value, label, reports) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkJson(item, `${label}[${index}]`, reports));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const childLabel = `${label}.${key}`;
      if (REPORT_KEYS.has(key) && typeof child === "string" && /^Verdict:/im.test(child)) {
        reports.push({ label: childLabel, text: child });
      } else {
        walkJson(child, childLabel, reports);
      }
    }
  }
}

function validateReport(report) {
  const findings = [];
  const trimmed = report.trim();

  if (!trimmed) {
    findings.push("Empty report.");
    return findings;
  }

  const lines = trimmed.split(/\r?\n/).map((line) => line.trim());
  const nonEmpty = lines.filter(Boolean);

  if (!/^Verdict:\s+\S+/i.test(nonEmpty[0] ?? "")) {
    findings.push("Report does not lead with `Verdict:`.");
  }

  const second = nonEmpty[1] ?? "";
  const third = nonEmpty[2] ?? "";
  const hasHeadline = /^Headline:\s+\S+/i.test(second);
  const confidenceLine = hasHeadline ? third : second;

  if (!/^Confidence:\s+(Low|Medium|High)$/i.test(confidenceLine)) {
    findings.push("Report is missing a valid `Confidence:` line in the expected position.");
  }

  if (!lines.some((line) => /^Best finding:\s*$/i.test(line))) {
    findings.push("Report is missing `Best finding:` section.");
  }

  if (/!\[[^\]]*]\([^)]*\)/.test(trimmed)) {
    findings.push("Report contains markdown image/chart attachment.");
  }

  if (/\b(you should|recommend|i would|position as)\s+(buy|sell|hold|trade|ape|enter|exit)\b/i.test(trimmed)) {
    findings.push("Report contains direct trading instruction language.");
  }

  for (const label of SOURCE_LABELS) {
    const line = findField(lines, label);
    if (!line) {
      findings.push(`Missing source field: \`${label}\`.`);
      continue;
    }
    if (isBadSourceLine(line)) {
      findings.push(`Bad source field: \`${line}\``);
    }
  }

  return findings;
}

function findField(lines, label) {
  const pattern = new RegExp(`^-\\s*${escapeRegExp(label)}\\s*:\\s*(.*)$`, "i");
  return lines.find((line) => pattern.test(line)) ?? null;
}

function isBadSourceLine(line) {
  const value = line.replace(/^-?\s*[^:]+:\s*/, "").trim();
  if (!value) return true;
  if (/^[;,\-]/.test(value)) return true;
  if (/^\([^)]*\)$/.test(value)) return true;
  if (/^(official|verified|community|launchpad|chain context|active org)$/i.test(value)) return true;

  const concrete =
    /https?:\/\//i.test(value) ||
    /(^|[\s(;])@[a-z0-9_]{2,}/i.test(value) ||
    /\b(not found|unavailable|blocked|private|not applicable|none found|no public|not exposed)\b/i.test(value);

  return !concrete;
}

function printFinding(file, label, message) {
  console.error(`${file} [${label}] ${message}`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
