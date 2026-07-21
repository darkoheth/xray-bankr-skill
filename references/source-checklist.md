# Source Checklist

Build a compact source map before writing prose. Settle the main narrative first.

## Narrative-first checks

1. Identify the strongest implied claim.
2. Try to prove or falsify that claim with the smallest reliable source set.
3. Prefer observable product state over marketing copy.

## Check order

1. Live page state and obvious product claims.
2. Network/API behavior if visible or fetchable.
3. Contract existence, tx history, or launcher metadata when relevant.
4. Exact Dexscreener/Gecko/Bankr/Noxa/Flap/Virtuals routes when token/launch facts matter.
5. Website/docs links and first-party statements.
6. X/social acknowledgement or contradiction.
7. GitHub/code proof when product claims depend on code.

## Contract-address-only inputs

If the input is only a CA, force this expansion order before writing the report:

1. Explorer token page and contract metadata.
2. Factory / deployer / launcher provenance.
3. Dexscreener and GeckoTerminal exact token and pair routes.
4. Any metadata-linked website, docs, X, Telegram, or GitHub.
5. Exact web/X searches for the address plus exact ticker/name.
6. If a real site/product is found, inspect that product directly.

Do not stop at:

- ticker
- price
- volume
- one DEX pair

The job is to discover whether the CA maps to a real acknowledged product, a launcher narrative, or nothing.

## Questions to settle

- Are the displayed funds real or virtual accounting?
- Are the agents/signals/users real or seeded/static/synthetic?
- Are the outputs coming from real APIs or mock/client-side randomness?
- Are contracts, settlement, payout proofs, or registry links actually present?
- Is the token official, acknowledged, fee-claimed, or still just community/speculation?
- Does the contract expand into a real first-party website/product when searched directly?
- Does the repo/product evidence materially support the narrative?

## Required source-map outputs

- strongest claim being tested
- strongest finding
- website/docs URL(s) or blocker
- X/social handle/URL or blocker
- GitHub URL(s) or blocker
- token/launcher context if material
- exact blocker for anything unresolved

## Source line rules

Never leave these blank:

- `Website/docs:`
- `X/social:`
- `GitHub/code:`

Never finish with labels only:

- `(Launchpad)`
- `(Community)`
- `(Official)`
- `(Chain context)`

Good:

- `Website/docs: https://example.com; https://docs.example.com`
- `X/social: @example; https://x.com/example/status/...`
- `GitHub/code: https://github.com/example/project; organic history, tests present`
- `X/social: not found after checking project site, docs, X search, and launcher metadata`

Bad:

- `Website/docs: (Launchpad)`
- `X/social: (Community)`
- `GitHub/code: (Active org)`
