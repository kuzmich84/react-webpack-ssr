const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/;

module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: "server.js"
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.ts', '.tsx']
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            use: ['ts-loader']
        },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]-[hash:base64:5]'
                            },
                            onlyLocals: true
                        }
                    },
                    'sass-loader'
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    optimization: {
        minimize: false
    }
}