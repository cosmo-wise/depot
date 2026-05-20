# Depot

<p align="center">
  Chariot Depot — UI asset center for the Harness generation chain
</p>

<p align="center">

[![Version][version-shield]][version-url]
[![License][license-shield]][license-url]
[![Node][node-shield]][node-url]
[![Build][build-shield]][build-url]

</p>

<p align="center">
  <a href="#getting-started">Getting Started</a> &middot;
  <a href="#structure">Structure</a> &middot;
  <a href="#profiles">Profiles</a> &middot;
  <a href="#delivery-modes">Delivery Modes</a> &middot;
  <a href="#integration">Integration</a> &middot;
  <a href="README-CN.md">🇨🇳 中文版</a>
</p>

---

Depot is a **reusable frontend asset registry** that provides:

- Semantic component contracts (platform-agnostic)
- Design tokens (CSS vars, Tailwind preset, Native token map)
- Platform implementations (`web-radix`, `universal-nativewind` — V2)
- Page blocks and templates
- Profile manifests and compatibility matrix
- Source-copy and package delivery modes

## The Problem

AI-generated frontends suffer from a fragmentation problem: every generation produces different component APIs, inconsistent styling conventions, and incompatible platform assumptions. Without a shared asset vocabulary, the generation chain produces output that varies wildly between runs.

Depot solves this by centralizing UI assets behind semantic contracts — components, tokens, blocks, and profiles — so the generation chain resolves consistent, platform-compatible output every time.

## Features

- **Semantic component contracts** — Platform-agnostic component interfaces decoupled from any specific framework or implementation.
- **Design token system** — Single-source tokens exported as CSS custom properties, Tailwind presets, and native platform maps.
- **Multi-platform implementations** — `web-radix` (React + Vite + Tailwind) and `universal-nativewind` (Expo + React Native + NativeWind) from the same contracts.
- **Page blocks and templates** — Pre-built, composable page sections for rapid UI generation.
- **Profile compatibility matrix** — Declarative platform capability manifests resolved at generation time.
- **Dual delivery modes** — npm package dependencies or source-copy for generated projects.

## Structure

```
depot/
├── packages/
│   ├── contracts/          # @chariot/depot-contracts
│   ├── tokens/             # @chariot/depot-tokens
│   ├── web-radix/          # @chariot/depot-web-radix
│   ├── universal-nativewind/  # @chariot/depot-universal-nativewind (V2)
│   ├── blocks/             # @chariot/depot-blocks
│   └── manifests/          # @chariot/depot-manifests
├── scripts/                # Build, verify, release utilities
├── registry-src/           # Source-copy registry templates
├── dist-registry/          # Built registry artifacts
├── examples/               # Reference implementations
├── tests/                  # Cross-package integration tests
└── docs/                   # Profiles, contracts, integration docs
```

## Getting Started

```bash
npm install
npm run build
npm test
npm run typecheck
npm run lint
```

## Profiles

| Profile | Status | Platforms | Framework |
| --- | --- | --- | --- |
| `web-radix` | V1 | web | React + Vite + Tailwind |
| `universal-nativewind` | V2 | web, ios, android | Expo + React Native + NativeWind |

## Delivery Modes

- **package**: Depend on `@chariot/depot-*` npm packages
- **source-copy**: Copy stable component source into generated projects

## Architecture

Depot organizes UI assets across six packages, each with a clear boundary:

| Package | Role | Consumer |
| --- | --- | --- |
| `contracts` | Semantic component interfaces | All implementation packages |
| `tokens` | Design tokens (CSS, Tailwind, native) | Platform implementations |
| `web-radix` | Web components via Radix UI | Web generation targets |
| `universal-nativewind` | Cross-platform via Expo/NativeWind | Universal generation targets |
| `blocks` | Pre-built page templates | Page composition |
| `manifests` | Profile definitions and compatibility | Generation orchestration |

### How It Works

When the generation chain produces a frontend target, it queries Depot's profile manifests for platform compatibility, resolves the matching package implementation, contracts component interfaces, and applies design tokens — all resolved from a single profile selection without per-component framework logic.

→ [Contracts](docs/contracts/) · [Integration guide](docs/integration/) · [Profiles](docs/profiles/)

## Integration

Depot serves the Chariot family:

- **Harness** — generation orchestration consumer
- **Course** — blueprint/uiArchitecture planning
- **Trial** — profile-aware verification gate
- **Saddle** — local CLI pull/sync/inject tooling
- **Carriage** — app runtime asset resolution

## Contributing

Contributions are welcome. Open an issue or pull request on [GitHub](https://github.com/cosmo-wise/depot).

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

<!-- Badge reference links -->
[version-shield]: https://img.shields.io/badge/version-0.1.0-blue
[version-url]: https://github.com/cosmo-wise/depot/releases
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue
[license-url]: https://github.com/cosmo-wise/depot/blob/main/LICENSE
[node-shield]: https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js
[node-url]: https://nodejs.org
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen
[build-url]: #
