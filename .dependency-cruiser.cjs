/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'warn',
      from: {},
      to: { circular: true },
    },
    {
      name: 'no-entrypoints-into-core',
      from: { path: '^src/(core|domain|state|services)/' },
      to: { path: '^src/(cli|entrypoints|ui|presenters|reporters)/' },
    },
    {
      name: 'no-terminal-or-ui-libs-in-core',
      from: { path: '^src/(core|domain|state|services)/' },
      to: { path: '^(chalk|ora|commander|ink|react)(/|$)' },
    },
    {
      name: 'no-parsers-into-renderers',
      from: { path: '(Parser|Schema|Validator|Decoder)\\.(ts|tsx)$' },
      to: { path: '(^src/(cli|entrypoints|ui|presenters|reporters)/|Renderer\\.(ts|tsx)$)' },
    },
    {
      name: 'no-stateful-modules-importing-entrypoints',
      from: { path: '^src/(core/)?state/.+(Store|Repository)\\.(ts|tsx)$' },
      to: { path: '(^src/(cli|entrypoints|agents|ui)/)' },
    },
  ],
  options: {
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.json'],
    },
    doNotFollow: {
      path: 'node_modules',
    },
    exclude: '^(build|coverage|dist|output|node_modules)',
  },
}
