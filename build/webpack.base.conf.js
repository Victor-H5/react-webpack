const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports  = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js', //or [id].chubk.js?
        publicPath: '', //default value
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
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
                    'less-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'dist/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: '../dist'
    },
    resolve: {
        alias: {
        },
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            //TODO 当name设置成false时，chunk没有被引入html
            // name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                }
            }
          },
          runtimeChunk: 'single'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new MiniCssExtractPlugin({
            filename: 'dist/[name].[contenthash:8].css',
            chunkFilename: 'dist/[name].[contenthash:8].chunk.css',
        }),

    ],
    performance: {
        hints: false
    }
}