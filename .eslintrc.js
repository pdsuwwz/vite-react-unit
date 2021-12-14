module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  globals: {
    page: true,
    REACT_APP_ENV: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    semi: ['error', 'never'],
    'prefer-const': 1,
    'no-var': 2,
    quotes: [1, 'single'],
    'quote-props': ['error', 'as-needed'],
    'constructor-super': 2,
    'no-class-assign': 2,
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    // https://stackoverflow.com/questions/53055300/cannot-fix-eslint-rule-on-indenting-case-statements-in-switch-statement
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'never'],
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-misleading-character-class': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'require-atomic-updates': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-empty-pattern': 2,
    'no-fallthrough': 2,
    'no-global-assign': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-unused-labels': 2,
    'no-useless-catch': 2,
    'no-useless-escape': 2,
    'no-with': 2,
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'require-yield': 2,
    'symbol-description': 2,
    'space-infix-ops': 2,
    'space-before-blocks': 2,
    'no-trailing-spaces': 2,
    'no-new-object': 2,
    'no-multi-assign': 2,
    'no-array-constructor': 2,
    'func-call-spacing': 2,
    'eol-last': 2,
    'no-script-url': 2,
    'no-return-assign': 2,
    'no-useless-return': 2,
    'no-proto': 2,
    'no-new-wrappers': 2,
    eqeqeq: 2,
    'no-eval': 2,
    'no-extra-label': 2,
    'no-implied-eval': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'arrow-spacing': 2
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    // https://github.com/yannickcr/eslint-plugin-react/issues/2157#issuecomment-473680689
    react: {
      version: 'detect'
    },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign']
  }
}
