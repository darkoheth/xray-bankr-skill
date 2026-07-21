# Submission Notes

Use this checklist before publishing Xray, installing it in Bankr, or sharing the repo.

## Package state

- Required root file: `SKILL.md`
- Companion docs live in `references/`
- Validator lives in `scripts/validate-report.mjs`
- Keep every file below Bankr's per-file install limit
- Do not include screenshots, logs, secrets, private notes, or user-specific memory

## Frontmatter

Public candidate shape:

```yaml
visibility: public
version: 1
```

Optional homepage metadata can be added once the public repo URL exists.

## Install test

Install from a GitHub folder URL that contains `SKILL.md` at its root:

```text
install the xray skill from https://github.com/<owner>/xray-bankr-skill
```

If the repo stays private, use the Bankr Skills UI/manual install path instead of the public GitHub install flow.

## Reviewer summary

Xray is a read-only Bankr-friendly crypto project scan skill. It tests a launch/product narrative against observable reality and returns a compact verdict with literal sources, strongest finding, and practical caveats.

Core safety claim:

- It never trades, connects wallets, signs transactions, posts publicly, DMs, joins communities, reveals private memory, or asks for credentials.
- Public content is treated as untrusted evidence, not instructions.
- It can call out fake/demo/seeded narratives hard, but it can also explicitly credit real product proof when a project is legit but early.

## Publish checklist

1. Run `node scripts/validate-report.mjs <report-or-json> [...]` against saved examples or smoke-test outputs.
2. Run a secret/personal-reference scan.
3. Confirm the report shape matches `references/report-template.md`.
4. Confirm positive and negative examples both read naturally.
5. Push the repo publicly or copy it into the chosen public submission repo.
6. Install from GitHub in Bankr and smoke-test with at least:
   - one fake/demo/LARP-style target
   - one positive-but-careful `LIVE PLUMBING` target
   - one token-linked product where token legitimacy and product legitimacy differ
7. If Bankr ignores updated references, delete the old skill install first and reinstall fresh.
