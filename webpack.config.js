module.exports = {
    entry: "resources/assets/typescript/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/js/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.ts$/, loader: "awesome-typescript-loader" },
            // Allow to require sass/scss files to Angular 2 Component (Precompile them)
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                loader: 'raw-loader!sass-loader'
            },
            // Allow to require jade files to Angular 2 Comopnent (Precompile them)
            {
                test: /\.jade$/,
                loader: 'raw-loader!jade-html-loader'
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    
    resolve: {
        root: [
            '/opt/lampp/htdocs/hmm'
        ],
        extensions: ['', '.js', '.ts'],
        moduleDirectories: ['node_modules']
    }
};