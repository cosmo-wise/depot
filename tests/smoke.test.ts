import { describe, expect, it } from 'vitest'

import { main } from '../src/cli.js'

describe('smoke', () => {
  it('returns success for doctor', () => {
    expect(main(['doctor'])).toBe(0)
  })
})
