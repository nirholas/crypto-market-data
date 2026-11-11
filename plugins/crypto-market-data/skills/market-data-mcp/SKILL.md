---
name: market-data-mcp
description: Run the crypto-market-data MCP server from a clone to fetch live prices, OHLC candles, trending coins, DeFi protocol TVL, chain TVL, yields and stablecoin supply from CoinGecko and DeFiLlama. Use when asked for current crypto market numbers.
---

# Crypto market data MCP server

The repo contains a stdio MCP server in `mcp-server/` backed by the public CoinGecko and DeFiLlama APIs. No API key is needed. It is not published under this repo's name on npm (the npm name `crypto-market-data-mcp` belongs to an unrelated publisher), so build it from the clone and never run `npx crypto-market-data-mcp`.

## Install and run

```bash
git clone https://github.com/nirholas/crypto-market-data
cd crypto-market-data/mcp-server
npm install
npm run build        # compiles src/index.ts to dist/index.js
npm start            # node dist/index.js, speaks MCP on stdio
```

Node.js 18 or newer is required for the built-in `fetch`. For development without a build, `npm run dev` runs `tsx src/index.ts`.

Register it with Claude Code from the clone:

```bash
claude mcp add crypto-market-data -- node /path/to/crypto-market-data/mcp-server/dist/index.js
```

## Tools

| Tool | Arguments | Source |
|---|---|---|
| `get_crypto_price` | `ids` (required, comma-separated CoinGecko ids such as `bitcoin,ethereum`), `currencies` (default `usd`) | CoinGecko |
| `get_top_coins` | `limit` (default 20, max 100) | CoinGecko |
| `get_coin_details` | `id` (required) | CoinGecko |
| `get_ohlcv` | `id` (required), `days` (1, 7, 14, 30, 90, 180 or 365) | CoinGecko |
| `get_trending` | none | CoinGecko |
| `search_coins` | `query` (required) | CoinGecko |
| `get_defi_protocols` | none | DeFiLlama |
| `get_protocol_tvl` | `protocol` (required, slug such as `aave`) | DeFiLlama |
| `get_chains_tvl` | none | DeFiLlama |
| `get_defi_yields` | none | DeFiLlama |
| `get_stablecoins` | none | DeFiLlama stablecoins |

## Worked example

Ask: "Is Solana's TVL growing, and what is SOL trading at?"

1. `search_coins` with `{"query": "solana"}` to confirm the CoinGecko id (`solana`).
2. `get_crypto_price` with `{"ids": "solana", "currencies": "usd"}`.
3. `get_chains_tvl` and pick out the Solana row.
4. Report the price, 24 hour change and chain TVL, and name CoinGecko and DeFiLlama as the sources.

## Notes

- CoinGecko ids are not tickers. Resolve a symbol with `search_coins` before calling the other tools.
- The public APIs are rate limited. If a call fails with a rate-limit error, wait and retry instead of calling in a loop.
- This is market data, not advice. Say when figures are a point-in-time snapshot.
