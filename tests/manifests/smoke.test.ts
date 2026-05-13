import { describe, expect, it } from 'vitest'
import {
  blocks,
  buildProfileExport,
  compatibilityMatrix,
  getProfile,
  profiles,
} from '@chariot/depot-manifests'

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

  it('exports a stable Carriage-readable profile payload', () => {
    const payload = buildProfileExport()
    const webRadix = payload.profiles.find(profile => profile.id === 'web-radix')

    expect(payload.schema).toBe('chariot.depot.profile-export.v1')
    expect(payload.defaultProfile).toBe('web-radix')
    expect(payload.defaultDeliveryMode).toBe('source-copy')
    expect(webRadix?.deliveryModes).toContain('source-copy')
    expect(webRadix?.trialProfiles).toContain('web-desktop')
    expect(webRadix?.defaultScaffold).toBe('vite-react-ts')
    expect(payload.blocks.length).toBeGreaterThan(0)
    expect(payload.compatibilityMatrix.components.length).toBeGreaterThan(0)
  })
})
