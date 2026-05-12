# Depot: Open vs Premium Boundary

## Open Layer (Open Source)
- `packages/contracts` — Semantic component contracts
- `packages/tokens` — Design tokens
- `packages/manifests` — Profile manifests
- `packages/blocks-open/` — Basic page blocks (sign-in, list-detail, marketing-hero)

## Premium Layer (Commercial)
- `packages/blocks-premium/` — Premium page blocks (analytics dashboard, data tables, etc.)
- `packages/profiles/` — Industry, brand, and delivery profiles
- `registry/` — Asset registry with compatibility matrix and provenance

## Boundaries
- Open packages must not import from premium packages
- Premium packages can reference open packages
- Registry metadata is open; premium asset content is not
