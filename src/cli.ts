#!/usr/bin/env node
import { fileURLToPath } from 'node:url'

export function main(argv: string[] = process.argv.slice(2)): number {
  const command = argv[0] ?? 'help'
  if (command === 'doctor') {
    console.log('depot scaffold is ready')
    return 0
  }
  console.log('depot scaffold CLI placeholder')
  return 0
}

const isMain = process.argv[1]
  ? fileURLToPath(import.meta.url) === process.argv[1]
  : false

if (isMain) {
  process.exitCode = main()
}
