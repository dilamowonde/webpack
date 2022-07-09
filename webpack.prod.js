const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js",
    },
    mode: "production",
    
    output: {
        filename: "[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },     
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: "images/[name].[contentHash].css"}),
        new HtmlWebpackPlugin({
            template: './src/template.html',
                minify: {
                    collapseWhitespace: false,
                    removeComments: true,
                    removeAttributeQuotes: true
                },
                inject: 'body' 
            })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use:  [MiniCssExtractPlugin.loader, 'css-loader',  'postcss-loader'],
          }
        
    ]},
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
      },
})