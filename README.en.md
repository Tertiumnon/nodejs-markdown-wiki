# NodeJS Markdown Wiki

A simple web server for displaying and managing markdown files with an HTTP interface.

## Features

- 📄 Display markdown files as HTML
- 🗂️ Navigate folder and file structure
- ⚡ Native TypeScript support
- 🎨 Fast linting and formatting with Biome
- 📦 Version management and releases via npm scripts

## Requirements

- Node.js 18+ or [Bun](https://bun.sh)
- npm or bun

## Installation

```bash
# Using npm
npm install

# Or using Bun
bun install
```

## Usage

### Start the server

```bash
npm start
# or
bun run start
```

Server runs at `http://localhost:8080`

### Available routes

- `GET /` — home page
- `GET /test` — render `test.md` as HTML
- `GET /files` — JSON file structure of the `test` folder

## npm Scripts

```bash
# Development
npm start              # Run server with hot reload

# Build
npm run build         # Build to dist/

# Code quality
npm run lint          # Check code with Biome
npm run format        # Format code with Biome

# Releases
npm run release:patch # Patch release (bump patch version)
npm run release:minor # Minor release (bump minor version)
npm run release:major # Major release (bump major version)
```

## Project Structure

```
nodejs-markdown-wiki/
├── src/
│   ├── index.ts              # Express server
│   └── utils/
│       ├── file.util.ts      # File system utilities
│       └── file.type.ts      # TypeScript types
├── test/
│   └── test.md               # Example markdown file
├── biome.json                # Biome configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.en.md              # This file
```

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) or Node.js
- **Framework**: Express.js 4.18.2
- **Language**: TypeScript 5.2.2
- **Markdown Parsing**: markdown-it 13.0.1
- **Templating**: EJS 3.1.9
- **Linting & Formatting**: Biome 1.8.0
- **Release Management**: @tertium/js 1.4.8

## Release Process

The project uses Git Flow for version management:

### Patch release (from main branch)
```bash
npm run release:patch
```
- Updates version (patch)
- Creates git tag
- Pushes to main
- Rebases develop

### Minor/Major release (from develop branch)
```bash
npm run release:minor  # or release:major
```
- Updates version (minor/major)
- Creates git tag
- Pushes to develop
- Merges into main
- Pushes main

## Development

### Recent Migrations

The project has been modernized with:
- ✅ **Bun Runtime** (v0.3.0) — replaces Node.js + ts-node-dev
- ✅ **Biome** (v0.4.0) — replaces ESLint + Prettier
- ✅ **@tertium/js** (v0.5.0) — release management

## License

MIT

## Author

Vitalii Balabanov <tertiumnon@gmail.com>
