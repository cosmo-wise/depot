# Semantic Component Contracts

All components across profiles share these semantic contracts. Individual profiles
may differ in implementation details but must satisfy the contract.

## Core Components

### Button
- Accepts `variant` (primary, secondary, ghost, danger) and `size` (sm, md, lg)
- Must be keyboard-accessible (Enter/Space for action)
- Must support `disabled` state

### TextField
- Accepts `label`, `error`, and standard input props
- Must associate label with input via `htmlFor`
- Must display validation error text when `error` is set

### Dialog (Modal)
- Must trap focus when open
- Must close on Escape key
- Must render a backdrop overlay
- Must render `null` when `open` is false

### Tabs
- Must render a tablist with tab buttons
- Must track active tab via `active` prop or internal state
- Must support `onChange` callback

### Sheet (Drawer / Side Panel)
- Must render as a slide-in panel from configurable `side`
- Must close on overlay click
- Must render `null` when `open` is false

### Select
- Must expand a dropdown menu showing `options`
- Must track selection via `value` prop or internal state
- Must support keyboard navigation

### AppShell
- Must render `header`, `sidebar`, and `main` content areas
- Must use semantic HTML (header, aside, main)
- Must support responsive layout

### Card
- Must render `header` (title), `body` (children), and `footer` sections
- Must accept optional `className` for composition

### Toast
- Must support auto-dismiss with configurable duration
- Must support variants (default, success, error, warning)
- Must expose provider pattern and `useToast` hook

### DataTable
- Must render from `columns` and `rows` data
- Must support custom `render` per column
- Must show empty state message when rows is empty

### EmptyState
- Must render `title`, `description`, optional `icon`, and optional `action` button
- Must be composable with children for custom content
