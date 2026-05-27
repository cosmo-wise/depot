import * as fs from 'node:fs'
import * as path from 'node:path'
import * as crypto from 'node:crypto'
import { registryManifest } from '../registry-src/manifest.js'

const depotRoot = path.resolve(import.meta.dirname, '..')

interface RegistryEntry {
  source: string
  dest: string
  type: string
  profile: string
  required: boolean
}

interface ChecksumEntry {
  path: string
  sha256: string
  size: number
}

function sha256File(filePath: string): string {
  const data = fs.readFileSync(filePath)
  return crypto.createHash('sha256').update(data).digest('hex')
}

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function buildRegistry(): void {
  const distDir = path.resolve(depotRoot, 'dist-registry', 'web-radix')

  const entries: RegistryEntry[] = registryManifest

  const copied: string[] = []
  const skipped: string[] = []
  const checksums: ChecksumEntry[] = []

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
    checksums.push({
      path: entry.dest,
      sha256: sha256File(dst),
      size: fs.statSync(dst).size,
    })
  }

  // Copy registry index
  const registryIndex = path.resolve(depotRoot, 'registry-src', 'index.ts')
  if (fs.existsSync(registryIndex)) {
    ensureDir(distDir)
    fs.copyFileSync(registryIndex, path.join(distDir, 'index.ts'))
    checksums.push({
      path: 'index.ts',
      sha256: sha256File(path.join(distDir, 'index.ts')),
      size: fs.statSync(path.join(distDir, 'index.ts')).size,
    })
  }

  // Write checksum manifest
  const checksumManifest = {
    schema: 'chariot.depot.registry-checksum.v1',
    profile: 'web-radix',
    generatedAt: new Date().toISOString(),
    entries: checksums,
  }
  fs.writeFileSync(path.join(distDir, 'checksums.json'), JSON.stringify(checksumManifest, null, 2))

  console.log(`registry built: ${distDir}`)
  console.log(`  copied: ${copied.length} assets`)
  if (skipped.length) {
    console.log(`  skipped (optional): ${skipped.length} assets`)
  }
}

buildRegistry()
