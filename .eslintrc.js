module.exports = {
  plugins: ['prettier', 'jest'],
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',

    'react/jsx-filename-extension': 0,
  },
};
