import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

const maxLines = (max) => ['warn', { max, skipBlankLines: true, skipComments: true }]

export default tseslint.config(
  {
    ignores: ['build/**', 'coverage/**', 'dist/**', 'node_modules/**', 'output/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'tests/**/*.ts', 'scripts/**/*.ts'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'complexity': ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', {
        max: 40,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: false,
      }],
      'import/no-cycle': 'error',
    },
  },
  {
    files: ['src/**/*.ts', 'scripts/**/*.ts'],
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['src/cli.ts', 'src/cli/**/*.ts', 'src/entrypoints/**/*.ts'],
    rules: {
      'max-lines': maxLines(160),
    },
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'complexity': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
    },
  },
)
