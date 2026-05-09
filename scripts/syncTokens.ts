import * as fs from 'node:fs'
import * as path from 'node:path'

const checkMode = process.argv.includes('--check')
const distDir = path.resolve(import.meta.dirname, '..', 'packages', 'tokens', 'dist')

function main(): void {
  const cssPath = path.join(distDir, 'css', 'variables.css')
  const exists = fs.existsSync(cssPath)

  if (checkMode) {
    if (!exists) {
      console.error('token artifacts missing — run npm run build -w packages/tokens')
      process.exit(1)
    }
    console.log('token artifacts verified')
    return
  }

  console.log('sync tokens: use npm run build -w packages/tokens to generate')
}

main()
