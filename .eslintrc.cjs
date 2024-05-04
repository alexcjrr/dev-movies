module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'prinWidth': 80,
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'none',
        'arrowParens': 'always',
        'semi': false,
        'endOfLine': 'auto'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hookes': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "import-helpers/order-imports": [
      "warn",
      {
          "newlinesBetween": "always", // new line between groups
          "groups": [
              "/^react/",
              "module",
              "/^@shared/",
              [
                  "parent",
                  "sibling",
                  "index"
              ]
          ],
          "alphabetize": {
              "order": "asc",
              "ignoreCase": true
            }
          }
      ]
  }
}
