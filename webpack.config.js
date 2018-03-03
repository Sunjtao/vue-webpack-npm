const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'layout.min.js',
      libraryTarget: 'window',
      library: 'Layout'
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/Layout.vue'),
    output: {
      filename: 'Layout.js',
      libraryTarget: 'umd',
      library: 'Layout'
    }
  })
]
