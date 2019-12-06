const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production'

module.exports  = {
    mode: 'development',
    entry: {
        app: ['react-hot-loader/patch', path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            },
            {
                test: /\.(le|c)ss$/,
                exclude: path.resolve(__dirname, '../src'),
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(bmp|gif|jpe?g|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
        },
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            title: 'react-webpack',
            template: './src/index.html',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    performance: {
        hints: false
    }
};