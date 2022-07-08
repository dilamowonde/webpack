const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
                minify: {
                    collapseWhitespace: false
                } 
            }),
        new MiniCssExtractPlugin()
    ],
    // devServer: {
    //   static: ['dist'],
    // },

    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use:  ['style-loader', 'css-loader',  'postcss-loader'],
          },
        ],
      },
    
}