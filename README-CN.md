# Depot

<p align="center">
  把语义组件契约、设计令牌、平台实现和页面资产集中成一套可复用的前端资源中心。
</p>

<p align="center">

[![Node][node-shield]][node-url]
[![Version][version-shield]][version-url]
[![Workspace][workspace-shield]][workspace-url]
[![License][license-shield]][license-url]

</p>

<p align="center">
  <a href="#快速开始">快速开始</a> &middot;
  <a href="#安装">安装</a> &middot;
  <a href="#包结构">包结构</a> &middot;
  <a href="#集成">集成</a> &middot;
  <a href="README.md">🇬🇧 English</a>
</p>

---

## 为什么需要 Depot

AI 生成前端最容易失控的地方不是"能不能写出一个页面"，而是每次生成都会重新定义组件 API、样式约束和平台假设。没有统一的资源中心，web、native、页面 block 和设计令牌会在不同链路里各说各话。

Depot 把这些资产收口成统一仓库：组件契约、tokens、平台实现、blocks、manifest 和 source-copy registry 都围绕同一套 profile 能力面组织。

如果你需要让生成链路在不同平台和多次迭代中保持一致组件语言，Depot 适合成为上游编排和下游消费之间的共享资产层。

如果你只是在单一应用里临时写几个组件，不需要跨 profile 复用，这个仓库会偏重。

## 特性

- **语义组件契约**：平台无关的接口定义，让消费端先对齐能力面，再选择具体实现。
- **单源设计令牌**：同一套 tokens 输出给 CSS vars、Tailwind preset 和 native token map。
- **多平台实现包**：当前同时维护 `web-radix` 和 `universal-nativewind` 两条实现面。
- **页面 blocks 与模板资产**：为生成链路提供可复用页面片段，而不是每次从零拼装。
- **Profile 能力矩阵**：manifest 声明平台能力、兼容性和分发模式，供编排层决策。
- **包分发与 source-copy 双模式**：既可以依赖 workspace/package，也可以导出稳定源码到生成项目。

## 何时使用

| 场景 | 推荐命令 |
|------|------|
| 安装并校验整个 workspace | `npm install` + `npm run doctor` |
| 构建全部包 | `npm run build` |
| 校验 profile 定义 | `npm run verify:profiles` |
| 导出 profile 产物 | `npm run export:profiles` |
| 构建 source-copy registry | `npm run build:registry` |

## 快速开始

```bash
npm install
npm run build
npm run verify:profiles
npm run build:registry
npm run doctor
```

## 安装

```bash
npm install
```

需要 Node.js 20+。

## 包结构

| 包 | 角色 |
|------|------|
| `packages/contracts` | 语义组件契约 |
| `packages/tokens` | 设计令牌和导出适配器 |
| `packages/web-radix` | Web 实现包 |
| `packages/universal-nativewind` | 通用 React Native / Expo 实现 |
| `packages/blocks` | 可复用页面 blocks |
| `packages/manifests` | Profile 声明和兼容性元数据 |

## 使用

### 构建所有包

```bash
npm run build
npm run typecheck
npm run lint
```

### 校验 profile 和 tokens

```bash
npm run verify:profiles
npm run verify:tokens
npm run export:profiles
```

### 构建 registry 产物

```bash
npm run build:registry
```

## Profile

| Profile | 状态 | 平台 | 框架 |
|------|------|------|------|
| `web-radix` | V1 | web | React + Vite + Tailwind |
| `universal-nativewind` | V2 | web, ios, android | Expo + React Native + NativeWind |

## 交付模式

- **package（包模式）**：依赖 `@chariot/depot-*` workspace 包
- **source-copy（源码复制模式）**：将稳定 registry 源码复制到生成的项目中

## 工作原理

Depot 以 `packages/` 为事实来源，然后将这些资产投影到 profile manifest 和 registry 输出。上游生成器可以先解析 profile，然后消费契约、tokens、实现和 blocks，无需每次运行都发明组件 API。

## 集成

Depot 服务 Chariot 前端链路：

- **Harness** 在应用生成期间消费共享资产。
- **Course** 根据 Depot 的 profile 面规划 UI 架构。
- **Trial** 验证 profile 感知的输出。
- **Saddle** 将 Depot 资产拉取并注入到目标项目中。
- **Carriage** 从同一包集解析运行时资产期望。

## 开发

`packages/` 是权威来源。`registry` 和构建输出是生成的产物，不是手工编辑的源码。

正式测试位于 `repos/probe/assets/depot/unit/tests/`；`npm test` 是本地 workspace 检查，而 probe 仍然是已发布行为的正式测试路径。

## 贡献

欢迎贡献。请在 [GitHub](https://github.com/cosmo-wise/depot) 上提交 Issue 或 Pull Request。

## 许可

根据 Apache License, Version 2.0 许可。详见 [LICENSE](LICENSE)。

<!-- Badge reference links -->
[node-shield]: https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
[version-shield]: https://img.shields.io/badge/version-0.1.0-2563EB
[version-url]: ./package.json
[workspace-shield]: https://img.shields.io/badge/workspace-6%20packages-0F766E
[workspace-url]: ./packages
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-1D4ED8
[license-url]: ./LICENSE
