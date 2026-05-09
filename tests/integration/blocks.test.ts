import { describe, expect, it } from 'vitest'
import { resolveBlocks, getBlockById } from '@chariot/depot-blocks'

describe('integration', () => {
  it('resolves blocks for web-radix', () => {
    const resolved = resolveBlocks('web-radix')
    expect(resolved.length).toBeGreaterThan(0)
  })

  it('finds auth block by id', () => {
    const block = getBlockById('auth.sign-in.basic')
    expect(block).toBeDefined()
  })

  it('returns undefined for unknown block', () => {
    expect(getBlockById('nonexistent')).toBeUndefined()
  })
})
