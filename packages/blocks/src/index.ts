import { blocks } from '@chariot/depot-manifests'
import type { BlockManifest, UiProfile } from '@chariot/depot-contracts'

export function resolveBlocks(profile: UiProfile): BlockManifest[] {
  return blocks.filter(b => b.supports.includes(profile))
}

export function getBlockById(id: string): BlockManifest | undefined {
  return blocks.find(b => b.id === id)
}

export { blocks }
