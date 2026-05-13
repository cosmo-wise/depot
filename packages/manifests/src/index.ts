import type {
  BlockManifest,
  CompatibilityMatrix,
  DeliveryMode,
  ProfileManifest,
  UiProfile,
} from '@chariot/depot-contracts'

export const webRadixProfile: ProfileManifest = {
  id: 'web-radix',
  platforms: ['web'],
  framework: 'react',
  componentLibrary: '@chariot/depot-web-radix',
  buildTool: 'vite',
  deliveryModes: ['package', 'source-copy'],
  capabilityTier: 'web-only',
  trialProfiles: ['web-desktop', 'web-tablet', 'web-mobile'],
  defaultScaffold: 'vite-react-ts',
  tokenRuntime: 'tailwind-css-vars',
}

export const universalNativewindProfile: ProfileManifest = {
  id: 'universal-nativewind',
  platforms: ['web', 'ios', 'android'],
  framework: 'react-native',
  componentLibrary: '@chariot/depot-universal-nativewind',
  buildTool: 'expo',
  deliveryModes: ['package', 'source-copy'],
  capabilityTier: 'universal',
  trialProfiles: ['web-mobile', 'native-ios-smoke', 'native-android-smoke'],
  defaultScaffold: 'expo-router-ts',
  tokenRuntime: 'nativewind-token-map',
}

export const profiles: ProfileManifest[] = [
  webRadixProfile,
  universalNativewindProfile,
]

export function getProfile(id: string): ProfileManifest | undefined {
  return profiles.find(p => p.id === id)
}

export const compatibilityMatrix: CompatibilityMatrix = {
  profile: 'web-radix',
  supportedPlatforms: ['web'],
  supportedDeliveryModes: ['package', 'source-copy'],
  components: [
    {
      component: 'Button',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['click', 'keyboard', 'focus', 'disabled'] },
        'universal-nativewind': { status: 'supported', features: ['press', 'disabled'] },
      },
    },
    {
      component: 'TextField',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['input', 'focus', 'validation'] },
        'universal-nativewind': { status: 'supported', features: ['input', 'validation'] },
      },
    },
    {
      component: 'Modal',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['focus-trap', 'escape-close', 'portal'] },
        'universal-nativewind': { status: 'partial', features: ['escape-close'], missing: ['portal-equivalent'] },
      },
    },
    {
      component: 'Tabs',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['keyboard', 'focus'] },
        'universal-nativewind': { status: 'supported', features: ['press', 'swipe'] },
      },
    },
    {
      component: 'Select',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['keyboard', 'search', 'multi'] },
        'universal-nativewind': { status: 'partial', features: ['press'], missing: ['search', 'multi'] },
      },
    },
    {
      component: 'Sheet',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['drag', 'snap-points', 'escape-close'] },
        'universal-nativewind': { status: 'supported', features: ['drag', 'snap-points'] },
      },
    },
    {
      component: 'Toast',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['auto-dismiss', 'stacking', 'variants'] },
        'universal-nativewind': { status: 'partial', features: ['auto-dismiss'], missing: ['stacking'] },
      },
    },
    {
      component: 'AppShell',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['header', 'sidebar', 'responsive'] },
        'universal-nativewind': { status: 'partial', features: ['header'], missing: ['sidebar'] },
      },
    },
    {
      component: 'Card',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['header', 'body', 'footer'] },
        'universal-nativewind': { status: 'supported', features: ['header', 'body', 'footer'] },
      },
    },
    {
      component: 'DataTable',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['sorting', 'render', 'empty-state'] },
        'universal-nativewind': { status: 'partial', features: ['render'], missing: ['sorting'] },
      },
    },
    {
      component: 'EmptyState',
      profileSupport: {
        'web-radix': { status: 'supported', features: ['title', 'description', 'icon', 'action'] },
        'universal-nativewind': { status: 'supported', features: ['title', 'description', 'action'] },
      },
    },
  ],
  blocks: [],
}

export const blocks: BlockManifest[] = [
  {
    id: 'auth.sign-in.basic',
    supports: ['web-radix'],
    requires: ['Button', 'TextField', 'Card'],
    trialAssertions: ['responsive', 'content-visible', 'form-submits'],
    surfaces: ['desktop', 'tablet', 'mobile'],
    dataMode: 'mock-readonly',
  },
  {
    id: 'dashboard.analytics.basic',
    supports: ['web-radix'],
    requires: ['AppShell', 'Card', 'Tabs', 'DataTable'],
    trialAssertions: ['responsive', 'content-visible', 'nav-works'],
    surfaces: ['desktop', 'tablet', 'mobile'],
    dataMode: 'mock-readonly',
  },
  {
    id: 'settings.account.basic',
    supports: ['web-radix'],
    requires: ['AppShell', 'TextField', 'Button', 'Card'],
    trialAssertions: ['responsive', 'content-visible', 'form-submits'],
    surfaces: ['desktop', 'tablet', 'mobile'],
    dataMode: 'mock-readonly',
  },
  {
    id: 'marketing.hero.centered',
    supports: ['web-radix'],
    requires: ['Button'],
    trialAssertions: ['responsive', 'content-visible', 'no-overlap'],
    surfaces: ['desktop', 'tablet', 'mobile'],
    dataMode: 'static',
  },
]

export interface DepotProfileExport {
  schema: 'chariot.depot.profile-export.v1'
  defaultProfile: UiProfile
  defaultDeliveryMode: DeliveryMode
  profiles: ProfileManifest[]
  compatibilityMatrix: CompatibilityMatrix
  blocks: BlockManifest[]
}

export function buildProfileExport(
  defaultProfile: UiProfile = 'web-radix',
  defaultDeliveryMode: DeliveryMode = 'source-copy',
): DepotProfileExport {
  return {
    schema: 'chariot.depot.profile-export.v1',
    defaultProfile,
    defaultDeliveryMode,
    profiles,
    compatibilityMatrix,
    blocks,
  }
}
