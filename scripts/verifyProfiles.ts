import { profiles } from '../packages/manifests/src/index.js'

function main(): void {
  const errors: string[] = []

  for (const profile of profiles) {
    if (!profile.id) errors.push(`profile missing id`)
    if (!profile.platforms.length) errors.push(`profile ${profile.id}: no platforms`)
    if (!profile.deliveryModes.length) errors.push(`profile ${profile.id}: no delivery modes`)
    if (!profile.componentLibrary) errors.push(`profile ${profile.id}: missing componentLibrary`)
    if (!profile.defaultScaffold) errors.push(`profile ${profile.id}: missing defaultScaffold`)
  }

  if (errors.length > 0) {
    console.error('profile verification errors:')
    for (const err of errors) console.error(`  - ${err}`)
    process.exit(1)
  }

  console.log(`verified ${profiles.length} profiles`)
}

main()
