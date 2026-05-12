// INTENTIONALLY UNMANAGED — not synced by tools/chariot/sync_standards.py
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['build/**', 'coverage/**', 'dist/**', 'dist-registry/**', 'node_modules/**', 'output/**', 'packages/*/dist/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['packages/**/src/**/*.ts', 'packages/**/src/**/*.tsx', 'tests/**/*.ts', 'scripts/**/*.ts'],
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
    files: ['packages/**/src/**/*.ts', 'packages/**/src/**/*.tsx', 'scripts/**/*.ts'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': ['warn', { max: 60, skipBlankLines: true, skipComments: true }],
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
