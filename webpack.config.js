const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/feed.js'],
  output: {
    filename: 'feed.js',
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
  ]
  }
};
