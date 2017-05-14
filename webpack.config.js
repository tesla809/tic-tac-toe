var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  
  output: {
     path: path.resolve(__dirname, 'build'),
     filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
        query: {
           presets: ['es2015']
        }
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      }
    ]

  }
};