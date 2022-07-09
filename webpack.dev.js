const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body'
            }),
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        
        
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use:  [MiniCssExtractPlugin.loader, 'css-loader',  'postcss-loader'],
          }
    ]}
})