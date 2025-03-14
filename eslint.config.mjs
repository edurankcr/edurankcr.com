// noinspection JSCheckFunctionSignatures

import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default antfu(
  {
    react: true,
    typescript: true,

    lessOpinionated: true,
    isInEditor: false,

    stylistic: {
      semi: true,
    },

    formatters: {
      css: true,
    },

    plugins: {
      '@next/next': nextPlugin,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      "perfectionist/sort-imports": ["error", {
        "groups": [
          ["^react$", "^next"], // React and Next first
          ["^@theme"], // All @theme imports together
          ["^@?\\w"], // Other external libraries
          ["^\\."] // Relative imports
        ]
      }]
    },

    ignores: ['migrations/**/*', 'next-env.d.ts'],
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Avoid destructuring enforcement
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow uppercase titles in test cases
      'simple-import-sort/exports': 'error', // Sort exports
      'simple-import-sort/imports': 'error', // Sort imports
      "perfectionist/sort-imports": "off", // Disable perfectionist import sorting
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error"
    },
  }
);
