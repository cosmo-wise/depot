import * as fs from 'node:fs'
import * as path from 'node:path'

function main(): void {
  const pkgPath = path.resolve(import.meta.dirname, '..', 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  const version = pkg.version

  const tarballName = `depot-${version}.tgz`
  console.log(`pack release: ${tarballName} (dry run — use npm pack to produce)`)

  for (const workspace of pkg.workspaces || []) {
    const wsp = path.resolve(import.meta.dirname, '..', workspace)
    console.log(`  workspace: ${workspace} -> ${wsp}`)
  }
}

main()
