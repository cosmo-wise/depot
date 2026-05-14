# Depot Profiles

## web-radix (V1 — stable)

| Property          | Value                               |
| ----------------- | ----------------------------------- |
| Platforms         | web                                 |
| Framework         | React                               |
| Build tool        | Vite                                |
| Component library | @chariot/depot-web-radix            |
| Token runtime     | Tailwind + CSS variables            |
| Delivery modes    | source-copy, package                |
| Trial profiles    | web-desktop, web-tablet, web-mobile |
| Capability tier   | web-only                            |

### Components

| Component  | Status    | Features                         |
| ---------- | --------- | -------------------------------- |
| Button     | supported | click, keyboard, focus, disabled |
| TextField  | supported | input, focus, validation         |
| Dialog     | supported | focus-trap, escape-close, portal |
| Tabs       | supported | keyboard, focus                  |
| Sheet      | supported | drag, snap-points, escape-close  |
| Select     | supported | keyboard, search, multi          |
| AppShell   | supported | header, sidebar, responsive      |
| Card       | supported | header, body, footer             |
| Toast      | supported | auto-dismiss, stacking, variants |
| DataTable  | supported | sorting, render, empty-state     |
| EmptyState | supported | title, description, icon, action |

## universal-nativewind (V2 — planned)

| Property          | Value                                              |
| ----------------- | -------------------------------------------------- |
| Platforms         | web, ios, android                                  |
| Framework         | React Native                                       |
| Build tool        | Expo                                               |
| Component library | @chariot/depot-universal-nativewind                |
| Token runtime     | NativeWind token map                               |
| Delivery modes    | source-copy, package                               |
| Trial profiles    | web-mobile, native-ios-smoke, native-android-smoke |
| Capability tier   | universal                                          |

## Token Runtime Usage

### Tailwind CSS (web-radix)

The `@chariot/depot-tokens` package exposes a Tailwind preset that maps design tokens to Tailwind's `theme.extend`. Each value references the corresponding CSS custom property with the raw value as fallback:

```ts
// tailwind.config.ts (consumer app)
import depotPreset from "@chariot/depot-tokens/tailwind";

export default {
  presets: [depotPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

After importing the preset, the following `theme.extend` keys are available in Tailwind utility classes:

| Tailwind key                          | Depot token source             | CSS variable example                                |
| ------------------------------------- | ------------------------------ | --------------------------------------------------- |
| `colors.gray`, `colors.primary`, etc. | `tokens.colors`                | `var(--color-primary-500, #3b82f6)`                 |
| `spacing`                             | `tokens.spacing`               | `var(--spacing-4, 1rem)`                            |
| `borderRadius`                        | `tokens.radius`                | `var(--radius-md, 0.375rem)`                        |
| `boxShadow`                           | `tokens.shadow`                | `var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))` |
| `fontFamily`                          | `tokens.typography.fontFamily` | `var(--font-sans, system-ui, ...)`                  |
| `zIndex`                              | `tokens.zIndex`                | `var(--z-modal, 1040)`                              |
| `transitionDuration`                  | `tokens.motion.duration`       | `150ms`                                             |
| `transitionTimingFunction`            | `tokens.motion.easing`         | `cubic-bezier(0.4, 0, 0.2, 1)`                      |
| `screens`                             | `tokens.breakpoint`            | `768px`                                             |

Usage example:

```tsx
<div className="bg-primary-500 text-white p-4 rounded-lg shadow-md" />
```

The CSS variables file is also available for direct use:

```css
@import "@chariot/depot-tokens/css";
```

### NativeWind (universal-nativewind)

The native token map provides raw token values for NativeWind configuration:

```ts
// nativewind.config.ts
import { nativeTokens } from "@chariot/depot-tokens/native";

export default {
  theme: {
    extend: nativeTokens,
  },
};
```
