<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset=".github/logo-light.svg">
    <img alt="Depot" src=".github/logo-light.svg" width="440">
  </picture>

  <p>把语义组件契约、设计令牌、平台实现和页面资产集中成一套可复用的前端资源中心。</p>
</div>

<div align="center">

[![Node][node-shield]][node-url]
[![Version][version-shield]][version-url]
[![Workspace][workspace-shield]][workspace-url]
[![License][license-shield]][license-url]

</div>

<div align="center">
  <a href="#quick-start">Quick Start</a> &middot;
  <a href="#install">Install</a> &middot;
  <a href="#packages">Packages</a> &middot;
  <a href="#integration">Integration</a> &middot;
  <a href="README-CN.md">README-CN</a>
</div>

---

## Why Depot

AI 生成前端最容易失控的地方不是“能不能写出一个页面”，而是每次生成都会重新定义组件 API、样式约束和平台假设。没有统一的资源中心，web、native、页面 block 和设计令牌会在不同链路里各说各话。

Depot 把这些资产收口成统一仓库：组件契约、tokens、平台实现、blocks、manifest 和 source-copy registry 都围绕同一套 profile 能力面组织。

如果你需要让生成链路在不同平台和多次迭代中保持一致组件语言，Depot 适合成为上游编排和下游消费之间的共享资产层。

如果你只是在单一应用里临时写几个组件，不需要跨 profile 复用，这个仓库会偏重。

## Features

- **语义组件契约**：平台无关的接口定义，让消费端先对齐能力面，再选择具体实现。
- **单源设计令牌**：同一套 tokens 输出给 CSS vars、Tailwind preset 和 native token map。
- **多平台实现包**：当前同时维护 `web-radix` 和 `universal-nativewind` 两条实现面。
- **页面 blocks 与模板资产**：为生成链路提供可复用页面片段，而不是每次从零拼装。
- **Profile 能力矩阵**：manifest 声明平台能力、兼容性和分发模式，供编排层决策。
- **包分发与 source-copy 双模式**：既可以依赖 workspace/package，也可以导出稳定源码到生成项目。

## When To Use

| 场景 | 推荐命令 |
|------|------|
| 安装并校验整个 workspace | `npm install` + `npm run doctor` |
| 构建全部包 | `npm run build` |
| 校验 profile 定义 | `npm run verify:profiles` |
| 导出 profile 产物 | `npm run export:profiles` |
| 构建 source-copy registry | `npm run build:registry` |

## Quick Start

```bash
npm install
npm run build
npm run verify:profiles
npm run build:registry
npm run doctor
```

## Install

```bash
npm install
```

Requires Node.js 20+.

## Packages

| Package | Role |
|------|------|
| `packages/contracts` | Semantic component contracts |
| `packages/tokens` | Design tokens and export adapters |
| `packages/web-radix` | Web implementation package |
| `packages/universal-nativewind` | Universal React Native / Expo implementation |
| `packages/blocks` | Reusable page blocks |
| `packages/manifests` | Profile declarations and compatibility metadata |

## Usage

### Build all packages

```bash
npm run build
npm run typecheck
npm run lint
```

### Verify profiles and tokens

```bash
npm run verify:profiles
npm run verify:tokens
npm run export:profiles
```

### Build registry artifacts

```bash
npm run build:registry
```

## Profiles

| Profile | Status | Platforms | Framework |
|------|------|------|------|
| `web-radix` | V1 | web | React + Vite + Tailwind |
| `universal-nativewind` | V2 | web, ios, android | Expo + React Native + NativeWind |

## Delivery Modes

- **package** — consume `@chariot/depot-*` workspace packages
- **source-copy** — copy stable registry source into generated projects

## How It Works

Depot keeps `packages/` as source of truth, then projects those assets into profile manifests and registry outputs. Upstream generators can resolve a profile first, then consume contracts, tokens, implementations, and blocks without inventing per-run component APIs.

## Integration

Depot serves the Chariot frontend chain:

- **Harness** consumes shared assets during app generation.
- **Course** plans UI architecture against Depot's profile surface.
- **Trial** verifies profile-aware output.
- **Saddle** pulls and injects Depot assets into target projects.
- **Carriage** resolves runtime asset expectations from the same package set.

## Development

`packages/` is authoritative. `registry` and built outputs are generated artifacts, not hand-edited source.

Formal tests live under `repos/probe/assets/depot/unit/tests/`; `npm test` is a local workspace check, while probe remains the formal test path for published behavior.

## Contributing

Contributions are welcome. Open an issue or pull request on GitHub.

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE).

[node-shield]: https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
[version-shield]: https://img.shields.io/badge/version-0.1.0-2563EB
[version-url]: ./package.json
[workspace-shield]: https://img.shields.io/badge/workspace-6%20packages-0F766E
[workspace-url]: ./packages
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-1D4ED8
[license-url]: ./LICENSE
