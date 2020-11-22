module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint', // I guess we have prettier using eslint using babel-eslint? :(
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 'tab'],
    'no-tabs': ['error', { allowIndentationTabs: true }]
  },
}
