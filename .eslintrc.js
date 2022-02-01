module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-native/all',
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint'
  ],
  rules: {
    camelcase: [0, { properties: 'never' }],
    'no-return-assign': 'off',
    'sort-styles': 'off',
    'react/prop-types': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'off',
    'react/jsx-handler-names': 'off',
    'react-native/no-inline-styles': 'off'
  }
}
