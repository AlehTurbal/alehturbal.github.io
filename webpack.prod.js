const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: ['whatwg-fetch', './src/bundle.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
  ]},
  plugins: [
    new MinifyPlugin()
  ]
};
