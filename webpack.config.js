var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'templates');

var config = {
  entry: BUILD_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'analyze.min.js'
  },

  module : {
  loaders : [
   {
    test : /\.js?/,
    exclude: /(node_modules)/,
    include : BUILD_DIR,
    loader : 'babel-loader'
  }
  //,{
    //test: /\.css$/,
    //loader: 'style-loader!css-loader!postcss-loader',
    //include: path.join(__dirname, 'node_modules'),
    //exclude: /flexboxgrid/
  //}
   ]
  }
};

module.exports = config;
