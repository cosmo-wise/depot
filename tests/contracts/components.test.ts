import { describe, expect, it } from 'vitest'

describe('web-radix components', () => {
  it('all component modules are loadable', async () => {
    const mod = await import('@chariot/depot-web-radix')
    expect(typeof mod.Button).toBe('function')
    expect(typeof mod.TextField).toBe('function')
    expect(typeof mod.Dialog).toBe('function')
    expect(typeof mod.Tabs).toBe('function')
    expect(typeof mod.Sheet).toBe('function')
    expect(typeof mod.AppShell).toBe('function')
    expect(typeof mod.Card).toBe('function')
    expect(typeof mod.Select).toBe('function')
    expect(typeof mod.ToastProvider).toBe('function')
    expect(typeof mod.DataTable).toBe('function')
    expect(typeof mod.EmptyState).toBe('function')
  })

  it('all 11 components are exported', async () => {
    const mod = await import('@chariot/depot-web-radix')
    const exports = Object.keys(mod).filter(k => !k.startsWith('_') && k[0] === k[0].toUpperCase())
    const componentNames = ['Button', 'TextField', 'Dialog', 'Tabs', 'Sheet', 'AppShell', 'Card', 'Select', 'ToastProvider', 'DataTable', 'EmptyState']
    for (const name of componentNames) {
      expect(exports).toContain(name)
    }
  })
})
