// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
      singleQuote: true,
      trailingComma: 'es5',
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      bracketSpacing: true,
      jsxSingleQuote: false,
      bracketSameLine: false
    }]
  },
}; 