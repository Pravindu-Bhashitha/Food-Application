const path = require('path');

module.exports = {
    // Mode can be 'development' or 'production'
    mode: 'development',

    // Entry point of your application
    entry: './src/index.tsx', // assuming your entry point is a tsx file

    // Enable sourcemaps for debugging
    devtool: 'source-map',

    // The output of the bundled code
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'curryKingBundle.js',
    },

    // Resolve extensions
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    // Module and rules for how to handle different file types
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },]
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },

    // Development server configuration
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
