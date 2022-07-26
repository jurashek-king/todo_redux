// Documentation of this configuration is in src/documentation/infrastructure/codeStyle.story.mdx. Keep in sync.
module.exports = {
    root: true,
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/jsx-runtime",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: ["simple-import-sort", "jest"],
    rules: {
        "sort-imports": "off",
        "import/order": "off",
        "react/require-default-props": "off",
        "react/prop-types": "off",
        "no-nested-ternary": "off",
        "no-underscore-dangle": "off",
        "simple-import-sort/imports": [
            "error",
            {
                /* Regular expressions for grouping and ordering of imports. New line is added in between groups. */
                groups: [
                    [
                        "^\\u0000", // Imports of side effects, like polyfills
                    ],
                    [
                        "^[@\\w]", // Starts with word characters or @, matches libs from node modules
                    ],
                    [
                        "^src/*", // Absolute imports from our app
                        "^\\.\\./", // Relative imports from parent module
                        "^\\./", // Relative imports within module
                    ],
                ],
            },
        ],
        "simple-import-sort/exports": "error",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all", // Check use of all variables, global included. (default setting)
                args: "all", // Check use of all parameters.
                argsIgnorePattern: "^_", //Unused parameters can start by "_"
            },
        ],
        // we prefer top-down approach, mainly for styled-components
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "no-param-reassign": ["error", { props: true, ignorePropertyModificationsForRegex: ["^draft"] }],
        "func-names": ["error", "as-needed"],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: ["**/*.test.{ts,tsx}", "**/*.story.{ts,tsx}", "**/.test/**", "**/.storybook/**"],
            },
        ],
        "jest/expect-expect": ["error", { assertFunctionNames: ["expect", "assert*", "**.select", "expectSaga", "testSaga"] }],
        "react/jsx-props-no-spreading": "off",
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "@typescript-eslint/default-param-last": "off",
    },
};
