module.exports = {
    presets: [
        // Smart preset that lets you use the latest JS without micromanaging
        // which syntax transforms and browser polyfills are required. See
        // https://babeljs.io/docs/en/babel-preset-env for more info.
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current",
                },
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-transform-runtime",
        [
            "module-resolver",
            {
                root: ["."],
            },
        ],
    ],
    sourceMaps: true,
};
