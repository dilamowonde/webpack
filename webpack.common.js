const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
   
    // devServer: {
    //   static: ['dist'],
    // },

    module: {
        rules: [
          
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.svg/,
            type: 'asset/resource',
            generator: { 
              filename: 'images/[name]..[contenthash][ext][query]' 
            }
          }
        ],
      },
    
}