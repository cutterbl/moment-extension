module.exports = {
  extends: ['prettier'],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  globals: {
    moment: 'writable',
  },
  overrides: [
    {
      files: ['./src/*.js'],
      excludedFiles: '*.(spec|test).js',
    },
  ],
  rules: {
    'block-scoped-var': 2,
    camelcase: 0,
    'comma-style': [2, 'last'],
    complexity: [
      2,
      {
        max: 9,
      },
    ],
    curly: [2, 'all'],
    'dot-notation': [
      2,
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore',
      },
    ],
    'guard-for-in': 2,
    'max-depth': [
      2,
      {
        max: 2,
      },
    ],
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-params': [
      2,
      {
        max: 10,
      },
    ],
    'new-cap': [
      2,
      {
        properties: false,
      },
    ],
    'no-bitwise': 2,
    'no-caller': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 1,
    'no-debugger': 2,
    'no-empty': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-proto': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': 1,
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-useless-escape': 0,
    'no-with': 2,
    semi: [2, 'always'],
    strict: [2, 'never'],
    'valid-typeof': 2,
    'wrap-iife': [2, 'inside'],
  },
};
