/** @format */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'none',
  entry: {
    index: path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {extensions: ['.js', '.ts']},
  target: 'node',
  output: {
    path: path.join(__dirname, '..', '..', 'projects', 'sw-lessons', 'src'),
    filename: 'sw.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __BUILDTIMESTAMP__: JSON.stringify(Date.now())
    })
  ]
};
