# crypto-market-data Development Guidelines

> Live cryptocurrency and DeFi market data. Simple, easy, straight to the point.  Market data from CoinGecko •  Originally built within Lyra Web3 Playground https://github.com/nirholas/lyra-web3-playground - 

## Project Overview

crypto-market-data is built with TypeScript. See the README for full documentation.

### Terminal Management

- **Always use background terminals** (`isBackground: true`) for every command so a terminal ID is returned
- **Always kill the terminal** after the command completes, whether it succeeds or fails — never leave terminals open
- Do not reuse foreground shell sessions — stale sessions block future terminal operations in Codespaces
- In GitHub Codespaces, agent-spawned terminals may be hidden — they still work. Do not assume a terminal is broken if you cannot see it
- If a terminal appears unresponsive, kill it and create a new one rather than retrying in the same terminal

## Contributing

- Follow the existing code style
- Test changes before submitting PRs
- Update documentation when adding features
- See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines
