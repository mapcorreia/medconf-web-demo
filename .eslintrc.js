const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'no-unsanitized'],
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/no-var-requires': 0,
    'react/display-name': 'off',
    'jest/valid-describe': 0,
    'react-hooks/exhaustive-deps': 'off',
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
  },
};
