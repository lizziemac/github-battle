const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',  // root file of the module
  output: {
    path: path.resolve(__dirname, 'dist'),  // the output path will be ./github-battle/dist
    filename: 'index_bundle.js',  // the name of the file to be placed in the path
  },
  module: {
    rules: [  // define how to convert files
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.(css)$/, use: ['style-loader', 'css-loader']}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'  // add index.html into dist/
    })
  ]
}