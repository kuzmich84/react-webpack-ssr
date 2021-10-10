const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';


function setupDevTool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

const GLOBAL_CSS_REGEXP = /\.global\.scss$/;

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'

    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            use: ['ts-loader']
        },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]-[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, '../src/common-styles/normalize.scss'),
                                path.resolve(__dirname, '../src/common-styles/mixins.scss'),
                                path.resolve(__dirname, '../src/common-styles/variables.scss'),
                                path.resolve(__dirname, '../src/common-styles/common.scss')
                            ]
                        }
                    }
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ],
                include: path.resolve(__dirname, '../src/img/sprite')
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: path.resolve(__dirname, '../src/img/sprite')
            },

        ]
    },
    devtool: setupDevTool(),
    plugins: IS_DEV
        ? [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
            new SpriteLoaderPlugin(),
            new CopyPlugin([
                    {
                        from: path.resolve(__dirname, '../src/img'),
                        to: path.resolve(__dirname, '../dist/client')
                    },
                ],
            ),

        ]
        :
        []

};
