const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports  = {
    mode: 'development',
    devServer: {
        contentBase: '../dist'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            //TODO 当name设置成false时，chunk没有被引入html
            // name: false,
        },
        runtimeChunk: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    performance: {
        hints: false
    }
}