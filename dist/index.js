import js from '@eslint/js';
import ts from 'typescript-eslint';
import globals from 'globals';
import importPlugin from 'eslint-plugin-simple-import-sort';
// import preferArrow from 'eslint-plugin-prefer-arrow';
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        ignores: ['node_modules/', 'dist/', 'build/', 'coverage/'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            'simple-import-sort': importPlugin,
            // 'prefer-arrow': preferArrow,
        },
    },
    js.configs.recommended,
    ...ts.configs.strictTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    {
        rules: {
            // Gerais
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
            'eqeqeq': ['error', 'always', { null: 'ignore' }],
            'curly': ['error', 'all'],
            'no-var': 'error',
            'prefer-const': 'error',
            'no-implicit-globals': 'error',
            // Imports
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'import/no-duplicates': 'error',
            'import/no-unresolved': 'error',
            // TypeScript
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            // Estilo
            'prefer-arrow/prefer-arrow-functions': [
                'error',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
            'arrow-body-style': ['error', 'as-needed'],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
        },
    },
];
