# crypto-market-data-mcp

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that gives AI assistants live cryptocurrency and DeFi market data from the public [CoinGecko](https://www.coingecko.com) and [DeFiLlama](https://defillama.com) APIs. No API keys required.

It runs over stdio and works with any MCP client: Claude Desktop, Claude Code, Cursor, and others. It is the companion to the [Crypto Market Data dashboard](https://nirholas.github.io/crypto-market-data/) in the parent repo.

## Tools

| Tool | Arguments | Description |
|------|-----------|-------------|
| `get_crypto_price` | `ids` (required), `currencies` (default `usd`) | Current price, 24h change, and market cap for one or more coins (comma-separated CoinGecko IDs like `bitcoin,ethereum`) |
| `get_top_coins` | `limit` (default 20, max 100) | Top cryptocurrencies by market cap |
| `get_coin_details` | `id` (required) | Detailed information about a specific coin (e.g. `bitcoin`) |
| `get_ohlcv` | `id` (required), `days` (default 7; 1, 7, 14, 30, 90, 180, or 365) | OHLC candlestick data in USD |
| `get_trending` | none | Trending coins on CoinGecko |
| `search_coins` | `query` (required) | Search coins by name or symbol |
| `get_defi_protocols` | none | Top 50 DeFi protocols by TVL from DeFiLlama |
| `get_protocol_tvl` | `protocol` (required) | TVL history and details for one protocol (slug like `aave` or `uniswap`) |
| `get_chains_tvl` | none | TVL for all blockchain networks |
| `get_defi_yields` | none | Top 50 DeFi yield farming pools from DeFiLlama |
| `get_stablecoins` | none | Stablecoin market data and circulating supplies |

All results are returned as pretty-printed JSON text content.

## Install and build

The package is not published to npm; install it from this repo:

```bash
git clone https://github.com/nirholas/crypto-market-data.git
cd crypto-market-data/mcp-server
npm install
npm run build   # compiles src/index.ts to dist/index.js
```

Requires Node.js 18+ (uses the built-in `fetch`).

## Run

```bash
npm start          # runs node dist/index.js
# or, during development, without a build step:
npm run dev        # runs tsx src/index.ts
```

The server speaks MCP over stdio; it prints `Crypto Market Data MCP server running on stdio` to stderr when ready. The `crypto-market-data-mcp` bin points at `dist/index.js`, so `npm link` (or `npm install -g .`) after building also puts a `crypto-market-data-mcp` command on your PATH.

## MCP client configuration

Add the server to your client's MCP config, for example in Claude Desktop's `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "crypto-market-data": {
      "command": "node",
      "args": ["/absolute/path/to/crypto-market-data/mcp-server/dist/index.js"]
    }
  }
}
```

With Claude Code:

```bash
claude mcp add crypto-market-data -- node /absolute/path/to/crypto-market-data/mcp-server/dist/index.js
```

Then ask your assistant things like "what's the current price of bitcoin and solana?" or "show me the top DeFi protocols by TVL".

## Notes

- Both upstream APIs are free public endpoints with rate limits; heavy usage can return HTTP 429, which the server surfaces as a tool error.
- Source lives in [`src/index.ts`](src/index.ts); it is a single-file server built on [`@modelcontextprotocol/sdk`](https://www.npmjs.com/package/@modelcontextprotocol/sdk).

## License

MIT
