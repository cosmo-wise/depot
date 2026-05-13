import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildProfileExport } from '../packages/manifests/src/index.js'

const outFlagIndex = process.argv.indexOf('--out')
const payload = `${JSON.stringify(buildProfileExport(), null, 2)}\n`

if (outFlagIndex >= 0) {
  const target = process.argv[outFlagIndex + 1]
  if (!target) {
    throw new Error('--out requires a target path')
  }
  writeFileSync(resolve(target), payload, 'utf8')
} else {
  process.stdout.write(payload)
}
