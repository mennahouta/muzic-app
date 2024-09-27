const { ESLint } = require("eslint");

/** @type {import("eslint").ESLint.FlatConfig[]} */
module.exports = [
    {
        ignores: [
            'node_modules/',
            'metro.config.js',
            'babel.config.js',
            'jest.config.js',
            'android/',
            'ios/',
        ],
    },
    {
        files: ["**/*.ts", "**/*.tsx"], // Apply config only to TS files
        languageOptions: {
            parser: require("@typescript-eslint/parser"), // Require the parser
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: ["./tsconfig.json"], // Specify your tsconfig file
            },
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            "react": require("eslint-plugin-react"),
            "react-hooks": require("eslint-plugin-react-hooks"),
            "import": require("eslint-plugin-import"),
        },
        rules: {
            "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
            "import/extensions": "off",
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": ["error"],
        },
    },
];
