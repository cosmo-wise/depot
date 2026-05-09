# AGENTS.md — Depot

## Role & Intent

Depot is the Chariot UI asset center. It provides reusable, verifiable
frontend assets consumed by Harness, Course, Trial, and Saddle.

## Operating Principles

1. **Packages/ is source of truth.** dist-registry/ is built, not hand-edited.
2. **Contract-first.** All components expose Depot semantic interfaces, not raw Radix.
3. **Profile-aware.** Capability declarations in manifests/ are authoritative — do not assume cross-profile equivalence.
4. **Token discipline.** Never bypass design tokens for ad-hoc values.
5. **Verification required.** Blocks entering stable must pass Trial smoke coverage.

## Conventions

- npm workspaces (not pnpm)
- TypeScript strict mode
- vitest for testing
- eslint + depcruise for linting
- Semantic versioning for published packages

## Commands

```bash
npm install          # install all workspace deps
npm run build        # build all packages (tsc)
npm test             # run all tests
npm run typecheck    # type-check all packages
npm run lint         # lint all packages
npm run verify:profiles  # validate profile manifests
npm run build:registry   # build registry artifacts
```
