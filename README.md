# Crypto Market Data

<!-- three.ws:badges -->
[![GitHub stars](https://img.shields.io/github/stars/nirholas/crypto-market-data?style=flat&logo=github)](https://github.com/nirholas/crypto-market-data/stargazers) [![Last commit](https://img.shields.io/github/last-commit/nirholas/crypto-market-data?style=flat)](https://github.com/nirholas/crypto-market-data/commits) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat)](https://github.com/nirholas/crypto-market-data/pulls) [![AI agent friendly](https://img.shields.io/badge/AI%20agents-AGENTS.md%20%2B%20llms.txt-6d5dfc?style=flat)](https://github.com/nirholas/crypto-market-data/blob/HEAD/AGENTS.md)
<!-- /three.ws:badges -->


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

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nirholas/crypto-market-data&type=Date)](https://www.star-history.com/#nirholas/crypto-market-data&Date)

<!-- three.ws:growth -->
## Support the project

If crypto-market-data saves you time, **[star it on GitHub](https://github.com/nirholas/crypto-market-data)**. Stars are how other developers and AI agents find the repositories worth trusting, and they cost you one click.

Know someone who would use it? [Post on X](https://twitter.com/intent/tweet?text=crypto-market-data%3A%20Live%20cryptocurrency%20and%20DeFi%20market%20data&url=https%3A%2F%2Fgithub.com%2Fnirholas%2Fcrypto-market-data) · [Share on Bluesky](https://bsky.app/intent/compose?text=crypto-market-data%3A%20Live%20cryptocurrency%20and%20DeFi%20market%20data%20https%3A%2F%2Fgithub.com%2Fnirholas%2Fcrypto-market-data) · [Share on LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgithub.com%2Fnirholas%2Fcrypto-market-data) · [Submit to Hacker News](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fgithub.com%2Fnirholas%2Fcrypto-market-data&t=crypto-market-data%3A%20Live%20cryptocurrency%20and%20DeFi%20market%20data) · [Share on Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fgithub.com%2Fnirholas%2Fcrypto-market-data&title=crypto-market-data%3A%20Live%20cryptocurrency%20and%20DeFi%20market%20data)

## Built for AI agents too

Coding agents and LLM tooling can read this repo directly: [AGENTS.md](./AGENTS.md), [llms.txt](./llms.txt), [llms-full.txt](./llms-full.txt). Point an agent at `https://github.com/nirholas/crypto-market-data` and it has the context it needs.

## More from the same author

- [All repositories by nirholas](https://github.com/nirholas/nirholas#readme): the full catalog, grouped by topic
- [three.ws](https://three.ws): the platform for 3D AI agents with Solana wallets, a skill marketplace and x402 payments
- Questions or ideas: [open an issue](https://github.com/nirholas/crypto-market-data/issues) or [start a discussion](https://github.com/nirholas/crypto-market-data/discussions)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=nirholas/crypto-market-data)](https://github.com/nirholas/crypto-market-data/graphs/contributors)

<!-- /three.ws:growth -->
