module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'next/core-web-vitals',
    'next',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-confusing-arrow': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/no-array-index-key': 'off',
  },
};
