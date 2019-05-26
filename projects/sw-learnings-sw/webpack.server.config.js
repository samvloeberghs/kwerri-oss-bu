const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    index: path.join(__dirname, 'src', 'index.ts'),
  },
  resolve: {extensions: ['.js', '.ts']},
  target: 'node',
  output: {
    path: path.join(__dirname, '..', '..', 'projects', 'sw-learnings', 'src'),
    filename: 'sw.js'
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  }
};
