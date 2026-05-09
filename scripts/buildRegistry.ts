import * as fs from 'node:fs'
import * as path from 'node:path'

const distDir = path.resolve(import.meta.dirname, '..', 'dist-registry', 'web-radix')

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function main(): void {
  const srcDir = path.resolve(import.meta.dirname, '..', 'packages', 'web-radix', 'src')
  const componentsDir = path.join(srcDir, 'components')

  ensureDir(path.join(distDir, 'components'))

  function copyFiles(sourceDir: string, targetDir: string): void {
    ensureDir(targetDir)
    for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
      const src = path.join(sourceDir, entry.name)
      const dst = path.join(targetDir, entry.name)
      if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
        fs.copyFileSync(src, dst)
      }
    }
  }

  copyFiles(componentsDir, path.join(distDir, 'components'))
  console.log(`registry built: ${distDir}`)
}

main()
