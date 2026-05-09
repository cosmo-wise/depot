import * as fs from 'node:fs'
import * as path from 'node:path'

const depotRoot = path.resolve(import.meta.dirname, '..')
const distDir = path.resolve(depotRoot, 'dist-registry', 'web-radix')

interface RegistryEntry {
  source: string
  dest: string
  type: string
  profile: string
  required: boolean
}

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function buildRegistry(): void {
  const manifestPath = path.resolve(depotRoot, 'registry-src', 'manifest.ts')
  if (!fs.existsSync(manifestPath)) {
    console.error('registry manifest not found')
    process.exit(1)
  }

  const entries: RegistryEntry[] = []
  const raw = fs.readFileSync(manifestPath, 'utf-8')
  const match = raw.match(/export const registryManifest: RegistryEntry\[\] = (\[[\s\S]*?\]);/)
  if (!match) {
    console.error('failed to parse registry manifest')
    process.exit(1)
  }

  const parsed = JSON.parse(match[1].replace(/'/g, '"').replace(/,(\s*[}\]])/g, '$1').replace(/(\w+):/g, '"$1":'))
  entries.push(...parsed)

  const copied: string[] = []
  const skipped: string[] = []

  for (const entry of entries) {
    const src = path.resolve(depotRoot, 'packages', entry.source)
    const dst = path.resolve(distDir, entry.dest)

    if (!fs.existsSync(src)) {
      if (entry.required) {
        console.error(`required asset missing: ${entry.source}`)
        process.exit(1)
      }
      skipped.push(entry.source)
      continue
    }

    ensureDir(path.dirname(dst))
    fs.copyFileSync(src, dst)
    copied.push(entry.dest)
  }

  // Copy registry index
  const registryIndex = path.resolve(depotRoot, 'registry-src', 'index.ts')
  if (fs.existsSync(registryIndex)) {
    ensureDir(distDir)
    fs.copyFileSync(registryIndex, path.join(distDir, 'index.ts'))
  }

  console.log(`registry built: ${distDir}`)
  console.log(`  copied: ${copied.length} assets`)
  if (skipped.length) {
    console.log(`  skipped (optional): ${skipped.length} assets`)
  }
}

buildRegistry()
