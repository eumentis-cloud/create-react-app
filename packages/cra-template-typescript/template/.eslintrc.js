module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-plusplus': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'preferButton'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
  },
};
