const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/feed.js'],
  output: {
    filename: 'feed.js',
    path: path.resolve(__dirname, 'js')
  }
};
