# npm Workspaces

Depot uses npm workspaces (not pnpm) to stay consistent with the rest of the
Chariot Node repositories.

## Workspace packages

| Package | npm name | Purpose |
| --- | --- | --- |
| `packages/contracts` | `@chariot/depot-contracts` | Platform-agnostic UI contract types and schemas |
| `packages/tokens` | `@chariot/depot-tokens` | Design token source of truth |
| `packages/web-radix` | `@chariot/depot-web-radix` | Web semantic component implementations (Radix adapter) |
| `packages/universal-nativewind` | `@chariot/depot-universal-nativewind` | Universal cross-platform components (Expo/NativeWind) |
| `packages/blocks` | `@chariot/depot-blocks` | Page block manifests and composition helpers |
| `packages/manifests` | `@chariot/depot-manifests` | Profile manifests, compatibility matrix, dependency graph |

## Commands

```bash
npm install          # install all workspace dependencies
npm run build        # build all packages
npm test             # run all tests
npm run typecheck    # type-check all packages
npm run lint         # lint all packages
```

## Adding dependencies

```bash
npm install <pkg> -w packages/<workspace>
```
