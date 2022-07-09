const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body'
            }),
        
        
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
            use:  ["style-loader", 'css-loader',  'postcss-loader'],
          }
    ]}
})