module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recomended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals'
  ],
}