# Bankr Tooling

Use Bankr-native structured data first when token/launch facts matter, then fill gaps with exact public routes.

## Required order for a contract address

1. Bankr launch/runtime metadata for launch source, deployer, fee recipient, website, tweet, pool, tx hash, and timestamp.
2. Bankr market/token search for chain, ticker, FDV/MC, volume, holders, and linked metadata.
3. Exact Dexscreener token search or token-pairs for canonical pair, liquidity, FDV/MC, volume, website, and socials.
4. GeckoTerminal exact token/pools if any key market field or canonical pair remains missing.
5. Explorer holder/top-holder data or a precise blocker.
6. Follow website/docs/X links to GitHub and other first-party evidence.

## Xray bias

Xray is not required to print a full token scorecard when the strongest finding is product-side.

Use token/launch facts when they change the verdict:

- official vs unofficial token posture
- real vs fake liquidity/fund claims
- fee-routing/endorsement truth
- real contract plumbing vs static mock UI

## Binding rules

- Copy structured values exactly.
- Never estimate liquidity, holders, concentration, deployer identity, endorsement, or fee claims.
- If a source is missing, print a blocker directly.
- Never leave a source line blank.

## Mandatory liquidity rule

Before `Liquidity: unknown`, Xray should have attempted an exact Dexscreener token-pairs style lookup when token context is material.

If exact pair data exists, print it.

## Provenance rule

If the token appears unofficial or third-party-launched, Xray should say so plainly without letting product quality masquerade as token endorsement.

Product legitimacy and token legitimacy are separate axes.
