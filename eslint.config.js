import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  formatters: true,
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      'vue/singleline-html-element-content-newline': ['error'],
      'vue/prefer-true-attribute-shorthand': ['error'],
      'vue/first-attribute-linebreak': [
        'off',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/no-empty-component-block': ['error'],
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/mustache-interpolation-spacing': ['error'],
      'vue/html-self-closing': ['error', {
        html: {
          normal: 'never',
          void: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
    },
  },

  rules: {
    'node/prefer-global/process': 'off',
    // 'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
  javascript: {
    overrides: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-useless-catch': 'off',
    },
  },
  typescript: true,
  stylistic: {
    indent: 2,
    overrides: {
      'antfu/top-level-function': 'off',
    },
  },
  perfectionist: true,
  imports: true,
  eslint: true,
})
