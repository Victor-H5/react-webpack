const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

const config = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('postcss-preset-env')({
                                    autoprefixer: {
                                        flexbox: 'no-2009',
                                    },
                                    stage: 3,
                                }),
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },

        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;