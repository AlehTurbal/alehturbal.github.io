const path = require('path');

module.exports = {
  entry: ['./src/base.css', 'whatwg-fetch', './src/bundle.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
    publicPath: '/js/'
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
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
  ]}
};
