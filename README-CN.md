# Depot

<p align="center">
  Chariot Depot — Harness 生成链的 UI 资产中心
</p>

<p align="center">

[![Version][version-shield]][version-url]
[![License][license-shield]][license-url]
[![Node][node-shield]][node-url]
[![Build][build-shield]][build-url]

</p>

<p align="center">
  <a href="#快速开始">快速开始</a> &middot;
  <a href="#结构">结构</a> &middot;
  <a href="#配置文件">配置文件</a> &middot;
  <a href="#交付模式">交付模式</a> &middot;
  <a href="#集成">集成</a> &middot;
  <a href="README.md">🇬🇧 English</a>
</p>

---

Depot 是一个 **可重用的前端资产注册表**，提供：

- 语义化组件合约（平台无关）
- 设计令牌（CSS 变量、Tailwind 预设、原生令牌映射）
- 平台实现（`web-radix`、`universal-nativewind` — V2）
- 页面块和模板
- 配置文件清单和兼容性矩阵
- 源码复制和包交付模式

## 问题

AI 生成的前端面临碎片化问题：每次生成都产生不同的组件 API、不一致的样式约定和不兼容的平台假设。没有共享的资产词汇表，生成链会在不同运行之间产出差异巨大的输出。

Depot 通过在语义合约背后集中管理 UI 资产来解决这个问题——组件、令牌、块和配置文件——使生成链每次都解析出一致、平台兼容的输出。

## 特性

- **语义化组件合约** — 平台无关的组件接口，与任何特定框架或实现解耦。
- **设计令牌系统** — 单一来源的令牌，导出为 CSS 自定义属性、Tailwind 预设和原生平台映射。
- **多平台实现** — 来自相同合约的 `web-radix`（React + Vite + Tailwind）和 `universal-nativewind`（Expo + React Native + NativeWind）。
- **页面块和模板** — 预构建、可组合的页面片段，用于快速 UI 生成。
- **配置文件兼容性矩阵** — 在生成时解析的声明式平台能力清单。
- **双交付模式** — npm 包依赖或面向生成项目的源码复制。

## 结构

```
depot/
├── packages/
│   ├── contracts/          # @chariot/depot-contracts
│   ├── tokens/             # @chariot/depot-tokens
│   ├── web-radix/          # @chariot/depot-web-radix
│   ├── universal-nativewind/  # @chariot/depot-universal-nativewind (V2)
│   ├── blocks/             # @chariot/depot-blocks
│   └── manifests/          # @chariot/depot-manifests
├── scripts/                # 构建、验证、发布工具
├── registry-src/           # 源码复制注册表模板
├── dist-registry/          # 构建后的注册表产物
├── examples/               # 参考实现
├── tests/                  # 跨包集成测试
└── docs/                   # 配置、合约、集成文档
```

## 快速开始

```bash
npm install
npm run build
npm test
npm run typecheck
npm run lint
```

## 配置文件

| 配置文件 | 状态 | 平台 | 框架 |
| --- | --- | --- | --- |
| `web-radix` | V1 | web | React + Vite + Tailwind |
| `universal-nativewind` | V2 | web, ios, android | Expo + React Native + NativeWind |

## 交付模式

- **package（包模式）**：依赖 `@chariot/depot-*` npm 包
- **source-copy（源码复制模式）**：将稳定的组件源码复制到生成的项目中

## 架构

Depot 将 UI 资产组织在六个包中，每个包有清晰的边界：

| 包 | 角色 | 消费者 |
| --- | --- | --- |
| `contracts` | 语义化组件接口 | 所有实现包 |
| `tokens` | 设计令牌（CSS、Tailwind、原生） | 平台实现 |
| `web-radix` | 基于 Radix UI 的 Web 组件 | Web 生成目标 |
| `universal-nativewind` | 基于 Expo/NativeWind 的跨平台组件 | 通用生成目标 |
| `blocks` | 预构建页面模板 | 页面组合 |
| `manifests` | 配置文件定义和兼容性 | 生成编排 |

### 工作原理

当生成链产生前端目标时，它查询 Depot 的配置文件清单以了解平台兼容性，解析匹配的包实现，签订组件接口合约，并应用设计令牌——全部从单个配置文件选择中解析，无需逐组件的框架逻辑。

→ [合约](docs/contracts/) · [集成指南](docs/integration/) · [配置文件](docs/profiles/)

## 集成

Depot 服务于 Chariot 家族：

- **Harness** — 生成编排消费者
- **Course** — 蓝图/UI 架构规划
- **Trial** — 配置文件感知的审核门禁
- **Saddle** — 本地 CLI 拉取/同步/注入工具
- **Carriage** — 应用运行时的资产解析

## 贡献

欢迎贡献。请在 [GitHub](https://github.com/cosmo-wise/depot) 上提交 Issue 或 Pull Request。

## 许可

根据 Apache License, Version 2.0 许可。详见 [LICENSE](LICENSE)。

<!-- Badge reference links -->
[version-shield]: https://img.shields.io/badge/version-0.1.0-blue
[version-url]: https://github.com/cosmo-wise/depot/releases
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue
[license-url]: https://github.com/cosmo-wise/depot/blob/main/LICENSE
[node-shield]: https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js
[node-url]: https://nodejs.org
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen
[build-url]: #
