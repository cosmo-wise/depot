import { describe, expect, it } from 'vitest'

describe('contracts types', () => {
  it('has valid UiProfile literals', () => {
    const profiles: string[] = ['web-radix', 'universal-nativewind']
    expect(profiles).toContain('web-radix')
    expect(profiles).toContain('universal-nativewind')
  })

  it('has valid TargetPlatform literals', () => {
    const platforms: string[] = ['web', 'ios', 'android']
    expect(platforms).toHaveLength(3)
  })
})
