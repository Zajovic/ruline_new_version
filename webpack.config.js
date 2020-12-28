module.exports = {
    entry: "./index.js",        // Entry file
    output: {
        filename: "bundle.js",    // Output file
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
}