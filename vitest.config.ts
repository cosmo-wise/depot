import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@chariot/depot-contracts': path.resolve(__dirname, 'packages/contracts/src/index.ts'),
      '@chariot/depot-manifests': path.resolve(__dirname, 'packages/manifests/src/index.ts'),
      '@chariot/depot-blocks': path.resolve(__dirname, 'packages/blocks/src/index.ts'),
      '@chariot/depot-tokens': path.resolve(__dirname, 'packages/tokens/src/index.ts'),
      '@chariot/depot-web-radix': path.resolve(__dirname, 'packages/web-radix/src/index.ts'),
    },
  },
  test: {
    globals: true,
  },
})
