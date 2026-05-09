# Depot

Chariot Depot — UI asset center for the Harness generation chain.

Depot is a **reusable frontend asset registry** that provides:
- Semantic component contracts (platform-agnostic)
- Design tokens (CSS vars, Tailwind preset, Native token map)
- Platform implementations (`web-radix`, `universal-nativewind` — V2)
- Page blocks and templates
- Profile manifests and compatibility matrix
- Source-copy and package delivery modes

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

## Integration

Depot serves the Chariot family:
- **Harness** — generation orchestration consumer
- **Course** — blueprint/uiArchitecture planning
- **Trial** — profile-aware verification gate
- **Saddle** — local CLI pull/sync/inject tooling
