const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports  = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, '../index.js'),
        vendors: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-saga',
            'axios'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    
}