# Depot: Open vs Premium Boundary

## Open Layer (Open Source)

- `packages/contracts` — Semantic component contracts
- `packages/tokens` — Design tokens
- `packages/manifests` — Profile manifests
- `packages/blocks` — Page blocks (auth, dashboard, list-detail, marketing)

## Premium Layer (Commercial)

- `packages/blocks/` — Selected premium blocks coexist alongside open blocks in the same package; access controls are the intended boundary
- `registry/` — Asset registry with compatibility matrix and provenance
- `packages/depot-premium/` — Enterprise UI packages and templates

## Boundaries

- Open packages must not import from premium packages
- Premium packages can reference open packages
- Registry metadata is open; premium asset content is not
- The `blocks/` package may contain both open and premium blocks; license and access policy, not directory split, is the binding boundary

## Commercialization Scheme: Wares Monorepo Integration

The `wares` monorepo serves as the official commercial and enterprise distribution of the Depot asset ecosystem. When executing enterprise E2E campaigns (`tool-site` pipelines):

1. **Decoupled Delivery**: Depot's open-source HTML/source-copy injection stage is cleanly bypassed (`depot_mode: skip`), shifting visual component sourcing from external hard-copies to Wares's native modular workspace packages.
2. **Direct Package Reuse**: Harness agents compose screens by importing Wares's own premium visual packages (`@wares/ui-core`, `@wares/ui-platform`, etc.) directly, maintaining an iron-clad decoupling boundary between product business logic (`products/<slug>`) and thin host shells (`apps/<slug>-<surface>`).
3. **Enterprise Domain Adapters**: Custom platform capabilities (storage, clipboard, native views) are bound through product-specific runtime contracts implemented inside Wares, allowing for high-performance and fully-auditable commercial deployments.
