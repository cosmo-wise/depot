// Registry Source Manifest — source of truth for source-copy delivery
// Each entry describes what to copy from packages/* into dist-registry/<profile>/

export interface RegistryEntry {
  source: string        // relative to packages/
  dest: string          // relative to dist-registry/<profile>/
  type: 'component' | 'block' | 'template' | 'token' | 'config'
  profile: string
  required: boolean
}

export const registryManifest: RegistryEntry[] = [
  // Components
  { source: 'web-radix/src/components/Button.tsx', dest: 'components/Button.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/TextField.tsx', dest: 'components/TextField.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Modal.tsx', dest: 'components/Modal.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Tabs.tsx', dest: 'components/Tabs.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Sheet.tsx', dest: 'components/Sheet.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/AppShell.tsx', dest: 'components/AppShell.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Card.tsx', dest: 'components/Card.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Select.tsx', dest: 'components/Select.tsx', type: 'component', profile: 'web-radix', required: true },
  { source: 'web-radix/src/components/Toast.tsx', dest: 'components/Toast.tsx', type: 'component', profile: 'web-radix', required: false },
  { source: 'web-radix/src/components/DataTable.tsx', dest: 'components/DataTable.tsx', type: 'component', profile: 'web-radix', required: false },
  { source: 'web-radix/src/components/EmptyState.tsx', dest: 'components/EmptyState.tsx', type: 'component', profile: 'web-radix', required: false },

  // Blocks
  { source: 'blocks/src/auth/SignInBlock.tsx', dest: 'blocks/auth/SignInBlock.tsx', type: 'block', profile: 'web-radix', required: false },
  { source: 'blocks/src/dashboard/AnalyticsDashboardBlock.tsx', dest: 'blocks/dashboard/AnalyticsDashboardBlock.tsx', type: 'block', profile: 'web-radix', required: false },
  { source: 'blocks/src/marketing/MarketingHeroBlock.tsx', dest: 'blocks/marketing/MarketingHeroBlock.tsx', type: 'block', profile: 'web-radix', required: false },
  { source: 'blocks/src/listdetail/ListDetailBlock.tsx', dest: 'blocks/listdetail/ListDetailBlock.tsx', type: 'block', profile: 'web-radix', required: false },

  // Templates
  { source: 'tokens/dist/css/variables.css', dest: 'styles/tokens.css', type: 'token', profile: 'web-radix', required: true },
  { source: 'tokens/dist/tailwind/preset.js', dest: 'lib/tailwind-preset.js', type: 'config', profile: 'web-radix', required: true },
]
