# Depot: Open vs Premium Boundary

## Open Layer (Open Source)
- `packages/contracts` — Semantic component contracts
- `packages/tokens` — Design tokens
- `packages/manifests` — Profile manifests
- `packages/blocks` — Page blocks (auth, dashboard, list-detail, marketing)

## Premium Layer (Commercial)
- `packages/blocks/` — Selected premium blocks coexist alongside open blocks in the same package; access controls are the intended boundary
- `registry/` — Asset registry with compatibility matrix and provenance

## Boundaries
- Open packages must not import from premium packages
- Premium packages can reference open packages
- Registry metadata is open; premium asset content is not
- The `blocks/` package may contain both open and premium blocks; license and access policy, not directory split, is the binding boundary
