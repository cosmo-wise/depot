export { SignInBlock } from './auth/SignInBlock.js'
export type { SignInBlockProps } from './auth/SignInBlock.js'
export { AnalyticsDashboardBlock } from './dashboard/AnalyticsDashboardBlock.js'
export type { AnalyticsDashboardBlockProps } from './dashboard/AnalyticsDashboardBlock.js'
export { MarketingHeroBlock } from './marketing/MarketingHeroBlock.js'
export type { MarketingHeroBlockProps } from './marketing/MarketingHeroBlock.js'
export { ListDetailBlock } from './listdetail/ListDetailBlock.js'
export type { ListDetailBlockProps } from './listdetail/ListDetailBlock.js'

import { blocks } from '@chariot/depot-manifests'
import type { BlockManifest, UiProfile } from '@chariot/depot-contracts'

export function resolveBlocks(profile: UiProfile): BlockManifest[] {
  return blocks.filter(b => b.supports.includes(profile))
}

export function getBlockById(id: string): BlockManifest | undefined {
  return blocks.find(b => b.id === id)
}

export { blocks }
