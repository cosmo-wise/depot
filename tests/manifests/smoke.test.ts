import { describe, expect, it } from 'vitest'
import { getProfile, profiles, compatibilityMatrix, blocks } from '@chariot/depot-manifests'

describe('manifests', () => {
  it('has two profiles', () => {
    expect(profiles).toHaveLength(2)
  })

  it('finds web-radix profile', () => {
    const profile = getProfile('web-radix')
    expect(profile).toBeDefined()
    expect(profile!.platforms).toContain('web')
  })

  it('finds universal-nativewind profile', () => {
    const profile = getProfile('universal-nativewind')
    expect(profile).toBeDefined()
    expect(profile!.platforms).toContain('ios')
  })

  it('compatibility matrix is defined', () => {
    expect(compatibilityMatrix.components.length).toBeGreaterThan(0)
  })

  it('blocks are defined', () => {
    expect(blocks.length).toBe(4)
  })

  it('all blocks require components', () => {
    for (const block of blocks) {
      expect(block.requires.length).toBeGreaterThan(0)
    }
  })
})
