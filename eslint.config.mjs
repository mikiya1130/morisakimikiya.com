import nextConfig from 'eslint-config-next';
import unusedImports from 'eslint-plugin-unused-imports';

const importResolverSettings = nextConfig[0]?.settings?.['import/resolver'] ?? {};
const baseNodeResolver = importResolverSettings.node ?? {};
const baseTsResolver = importResolverSettings.typescript ?? {};

export default [
  ...nextConfig,
  {
    name: 'project-customizations',
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        ...importResolverSettings,
        node: {
          ...baseNodeResolver,
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
        },
        typescript: {
          ...baseTsResolver,
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'no-restricted-imports': ['error', { patterns: ['./', '../'] }],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
