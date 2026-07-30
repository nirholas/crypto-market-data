# Crypto Market Data

**Live dashboard: [https://nirholas.github.io/crypto-market-data/](https://nirholas.github.io/crypto-market-data/)**

Live cryptocurrency and DeFi market dashboard with data from CoinGecko and DeFiLlama.

Cryptocurrency prices and market data. That's it! With a basic UI. I originally built this within [Lyra Web3 Playground](https://nirholas.github.io/crypto-market-data) and I thought it might be helpful for those looking for something very simple, a good learning experience to build + deploy, or maybe you're like me and just enjoy building and sharing simple yet useful creations. Live data, hooked up to CoinGecko and Defillama.

## Features

- 🪙 **Cryptocurrencies** - Top coins by market cap with 7-day sparklines 
- 🏦 **DeFi Protocols** - Protocol TVL rankings from DeFiLlama
- 📈 **Yields** - DeFi yield farming opportunities
- ⛓️ **Chains** - Blockchain TVL comparison
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive** - Works on desktop and mobile

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

Pushes to `main` are built and deployed automatically by the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The live site is at [nirholas.github.io/crypto-market-data](https://nirholas.github.io/crypto-market-data/).

To build and host the static output yourself:

```bash
npm run build
# Serve or upload the dist/ folder
```

## MCP Server

This repo also bundles a [Model Context Protocol](https://modelcontextprotocol.io) server in [`mcp-server/`](mcp-server/) that exposes the same CoinGecko and DeFiLlama data to AI assistants (Claude Desktop, Cursor, and other MCP clients): live prices, OHLCV candles, trending coins, coin search, DeFi protocol/chain TVL, yields, and stablecoin supplies.

See [`mcp-server/README.md`](mcp-server/README.md) for the full tool list, build instructions, and client configuration.

## Data Sources

- [CoinGecko](https://www.coingecko.com) - Cryptocurrency prices and market data
- [DeFiLlama](https://defillama.com) - DeFi protocol TVL and yield data

## License

All rights reserved. See [LICENSE](LICENSE).

## Documentation

Full documentation site: **https://nirholas.github.io/crypto-market-data/**

- [Getting started](docs/getting-started.md) covers install and first run.
- [Examples](docs/examples.md) has copy-paste snippets.
