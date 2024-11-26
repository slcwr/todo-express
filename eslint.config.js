// eslint.config.js
export default {
  extends: [
    'eslint:recommended'
  ],
  rules: {},
  ignores: ['node_modules/**', '.next/**', 'dist/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  }
};