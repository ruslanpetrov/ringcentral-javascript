'use strict';

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true
    },
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    globals: {
        chai: true,
        expect: true,
        sinon: true
    },
    rules: {
        // avoid variable hoisting issues
        // http://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'warn',

        // line breaks before braces
        // http://eslint.org/docs/rules/brace-style
        'brace-style': ['warn', '1tbs'],

        // require brackets for all statements
        // http://eslint.org/docs/rules/curly
        curly: ['warn', 'all'],

        // require leading dot vs dot at the end of statement
        // http://eslint.org/docs/rules/dot-location
        'dot-location': ['warn', 'property'],

        // require strict compare using === and !== vs == and !=
        // http://eslint.org/docs/rules/eqeqeq
        eqeqeq: ['warn', 'always'],

        // require single space around keywords
        // http://eslint.org/docs/rules/keyword-spacing.html
        'keyword-spacing': [
            'warn',
            {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true }
                }
            }
        ],

        // limit line length
        // http://eslint.org/docs/rules/max-len
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreUrls: true
            }
        ],

        // http://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 'off',

        // disallow re-assign variables or props inside 'if', 'while' conditions, etc.
        // http://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 'warn',

        // disallow console output
        // http://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // disallow special or invisible characters usage for regexp
        // http://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'warn',

        // disallow empty block statements
        // http://eslint.org/docs/rules/no-empty
        'no-empty': 'warn',

        // disallow not strict comparison with null
        // http://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 'warn',

        // disallow redundant boolean type cast
        // http://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'off',

        // disallow function definition inside block, disallow using 'var' inside block
        // http://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': ['warn', 'both'],

        // disallow nested ternary operator
        // http://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'warn',

        // disallow undeclared variables
        // http://eslint.org/docs/rules/no-undef
        'no-undef': 'error',

        // disallow unused import, disallow unused expressions
        // http://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],

        // disallow unused variables
        // http://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': [
            'error',
            {
                args: 'none',
                ignoreRestSiblings: true,
                caughtErrors: 'none'
            }
        ],

        // prefer let vs var
        // http://eslint.org/docs/rules/no-var
        'no-var': 'warn',

        // dismiss 'with' keyword usage
        // http://eslint.org/docs/rules/no-with
        'no-with': 'warn',

        // require one `var` or `let` or 'const` for each variable/const. disallow multiple declarations
        // http://eslint.org/docs/rules/one-var
        'one-var': ['warn', 'never'],

        // http://eslint.org/docs/rules/semi
        semi: 'warn',

        // require single space before curly brackets in blocks
        // http://eslint.org/docs/rules/space-before-blocks.html
        'space-before-blocks': ['warn', 'always'],

        // normalize space near function
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],


        // react specifics

        // require closing bracket to be placed at new line - affect only multi-line components
        // require closing bracket to be placed at the same line - affect single-line components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [
            'warn',
            {
                selfClosing: 'tag-aligned',
                nonEmpty: 'tag-aligned'
            }
        ],

        // ensure closing tag indent consistency on multi-line non self-closing components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'warn',

        // ensure JSX props space consistency
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': ['warn', 'never'],

        // ensure consistent properties indent for multi-line components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],

        // ensure consistent JSX tags indent
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': 'warn',

        // ensure consistent properties indent
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': 'warn',

        // require key for components inside arrays
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 'warn',

        // disallow more that 1 property per line for multi-line components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [
            'warn',
            {
                maximum: 1,
                when: 'multiline'
            }
        ],

        // disallow duplicated properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': 'warn',

        // disallow usage of non imported and not defined components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 'warn',

        // ensure consistent spacing of tag opening and closing brackets
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never'
        }],

        // ensure consisting space before closing bracket
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        // deprecated. replaced by react/jsx-tag-spacing
        'react/jsx-space-before-closing': ['off'],

        // prevent warning
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': 'error',

        // warning
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',

        // require parentheses around JSX markup
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'warn',
            {
                declaration: true,
                assignment: true,
                return: true,
                arrow: true
            }
        ],

        // disallow state assignment
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'warn',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        'react/no-typos': 'warn',

        // prevent some typo's
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'warn',

        // require default values to be specified for optional properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'warn',

        // require class members ordering for consistency
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ]
            }
        ],

        // disallow children for self-closing HTML elements like <br />
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        'react/void-dom-elements-no-children': 'warn'

    }
};
