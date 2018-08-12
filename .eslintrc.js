module.exports = {
  plugins: ['prettier', 'jest'],
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
};
