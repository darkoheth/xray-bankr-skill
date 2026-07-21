# Xray

Xray is a Bankr-friendly crypto project scan skill.

It is built for the cases where the main question is not just "is the token tradable?" but "what is actually real here?"

Use it for:

- launchpads
- agent sites
- jackpot/funds apps
- RWA/token demos
- token-linked products
- polished narratives that may be real, fake, early, seeded, or stronger than expected

Xray is the companion to Scoutr, not a replacement.

- `scoutr` = token-first diligence
- `xray` = narrative/product reality check

## Install in Bankr

Once this repo is pushed to GitHub, install with:

```text
install the xray skill from <repo-url>
```

## Use

```text
xray <contract-or-link>
```

```text
xray this
```

```text
scan this with xray
```

## What it should do

- test the narrative against observable reality
- lead with the strongest finding
- call out fake/demo/seeded setups hard when the evidence supports it
- give real product proof proper credit when the project is actually solid
- support positive-but-careful reads like `LIVE PLUMBING` when the plumbing is real but final execution or settlement was not personally confirmed
- keep source lines literal and never blank

## Verification

```bash
node scripts/validate-report.mjs path/to/report.txt
```
