var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var configJs = {

  entry: [
    APP_DIR + '/components/index.jsx',
  ],

  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },

  resolve : {
    extensions: ['', '.js', '.jsx']
  },

   plugins: [
        new CopyWebpackPlugin([
            { from:  'src/client/app/index.html', to: 'index.html' },
        ]),
  ],

  module: {
  loaders: [{
    test: /(\.js|\.jsx)$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react']}
    },
  ]
 }
};


module.exports = [configJs];

