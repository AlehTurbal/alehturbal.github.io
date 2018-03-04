const path = require('path');
const merge = require('webpack-merge');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  plugins: [ 
    //new MinifyPlugin() 
  ]
});
