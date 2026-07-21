# Examples

## Negative scan

User:

```text
xray https://example-launchpad.site
```

Expected behavior:

- identify the main claim quickly
- test that claim against live state/API/observable evidence
- lead with the strongest contradiction
- classify it bluntly if it is fake, unfunded, seeded, or prelaunch

## Positive scan

User:

```text
xray https://example-product.site
```

Expected behavior:

- do not force a negative read
- if the product really works, the repo is real, and the docs align, say so clearly
- still separate product legitimacy from token legitimacy if the token is thin or unofficial

## Working-tech positive example

User:

```text
xray https://www.getassay.network/
```

Expected behavior:

- allow a clearly positive-but-careful read such as `LIVE PLUMBING`
- give explicit credit for real app/API/router/contract plumbing when observed
- say plainly if a final buy/redeem/settlement path was not personally executed
- keep per-asset backing, liquidity, and slippage caveats separate from the core finding

Good shape:

```text
Verdict: Watch
Headline: LIVE PLUMBING
Confidence: Medium

What it is:
Assay looks like a live tokenized-stock basket builder rather than a static mockup.

Best finding:
- The app appears to build real transaction flows and exposes actual contract/pool plumbing rather than fake chart-only balances.

Evidence:
- Functional app surface with live price/planning routes.
- Frontend builds real wallet transaction flows.
- Shipped code exposes concrete token/pool/router addresses.

My read:
This looks like working tech, not just a polished demo. Still early, and if the buy/redeem flow was not personally executed, settlement should be described as not independently confirmed.
```

## Token-linked product

User:

```text
xray <contract>
<website>
<github>
```

Expected behavior:

- use token/launch evidence only where it changes the verdict
- if the strongest finding is product-side, lead with that
- if the strongest finding is provenance or lack of endorsement, lead with that

## Contract-address-only scan

User:

```text
xray 0x...
```

Expected behavior:

- do not stop at chart data or one DEX route
- use the CA to resolve explorer identity, launcher/factory provenance, and exact pair routes
- search exact address plus exact ticker/name for first-party site, docs, X, Telegram, and GitHub
- if the CA expands into a real site/product, inspect that site/product directly
- if the CA does not expand into a real acknowledged web footprint, say that clearly

Good shape:

```text
Verdict: Watch
Headline: GHOST LAUNCH / PONS MICROCAP
Confidence: Medium

What it is:
<1-2 lines on what the contract appears to be once explorer, DEX, and launcher evidence are combined>

Best finding:
- The CA resolves to a live launcher token, but no meaningful first-party website, docs, or social acknowledgement were found.

Evidence:
- Live pair and current liquidity/volume found on exact DEX routes.
- Explorer shows verified contract identity and launcher/factory provenance.
- No first-party website, docs, X, Telegram, or GitHub found after exact address and ticker/name checks.

My read:
This looks like real live token plumbing but no product or acknowledged narrative behind it. Treat it as microcap flow, not product-backed legitimacy.
```

## Social-linked site discovery

User:

```text
xray 0x...
```

Expected behavior:

- if a plausible X account is found, inspect the account instead of stopping at the handle
- read the profile URL, bio links, pinned tweet, and recent posts for the first-party site
- if the website is discoverable from the X account, inspect the website and let it affect the verdict

Good note in source trace:

```text
Source trace: explorer -> launcher provenance -> exact X account -> profile URL/pinned tweet -> website inspection
```

## Reply style

User replies to a link preview or prior message:

```text
xray this
```

Expected behavior:

- resolve the replied-to payload
- inspect the linked narrative directly
- return the compact xray template
