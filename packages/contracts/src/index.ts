export type TargetPlatform = 'web' | 'ios' | 'android' | 'miniapp'

export type DeliveryMode = 'package' | 'source-copy'

export type UiProfile = 'web-radix' | 'universal-nativewind' | 'taro-miniapp'

export type CapabilityTier = 'web-only' | 'universal'

export type ComponentStatus = 'supported' | 'partial' | 'unsupported'

export interface ComponentSupportEntry {
  status: ComponentStatus
  features: string[]
  missing?: string[]
}

export interface ComponentCapability {
  component: string
  profileSupport: Record<string, ComponentSupportEntry>
}

export interface ProfileManifest {
  id: string
  platforms: TargetPlatform[]
  framework: string
  componentLibrary: string
  buildTool: string
  deliveryModes: DeliveryMode[]
  capabilityTier: CapabilityTier
  trialProfiles: string[]
  defaultScaffold: string
  tokenRuntime: string
  providerPackage?: string
  commercialPackage?: string
}

export interface BlockManifest {
  id: string
  supports: UiProfile[]
  requires: string[]
  trialAssertions: string[]
  surfaces: string[]
  dataMode: string
}

export interface TemplateManifest {
  id: string
  profile: UiProfile
  blocks: string[]
  tokens: boolean
  deliveryMode: DeliveryMode
}

export interface CompatibilityMatrix {
  profile: UiProfile
  supportedPlatforms: TargetPlatform[]
  supportedDeliveryModes: DeliveryMode[]
  components: ComponentCapability[]
  blocks: string[]
}

export interface TokenVersion {
  schema: 'chariot.depot.token-version.v1'
  version: string
  hash: string
  createdAt: string
  changes?: string[]
}

export interface ProductTokenOverrides {
  productId: string
  profile: UiProfile
  overrides: {
    primaryColor?: string
    secondaryColor?: string
    fontFamily?: string
    borderRadius?: string
    spacing?: string
  }
}
