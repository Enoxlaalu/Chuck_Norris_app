module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': 0,
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'react/display-name': 0,
        'no-prototype-builtins': 0
    },
    'overrides': [
        {
            'files': ['*.ts', '*.tsx'],
            'rules': {
                '@typescript-eslint/no-unused-vars': [2, { 'args': 'none' }]
            }
        }
    ]
};