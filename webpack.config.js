var webpack = require('webpack');

module.exports = {
  target: 'electron-renderer',
  entry: './renderer.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'lodash',
    ])
  ]
};