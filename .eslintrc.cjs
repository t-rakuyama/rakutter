module.exports = {
  root: true,
  env: {
    "browser": true, // windowなどのグローバル変数が認識される
    "es2022": true // ES2022までに導入されたグローバル変数が認識される
  },
  extends: [
    'eslint:recommended', // ESLintの推奨ルール
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 13, // JSがどの構文を使っているかをESLintに伝える
    "sourceType": "module" // import/exportをサポートさせる
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
