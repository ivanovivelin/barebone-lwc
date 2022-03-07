// webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const LwcWebpackPlugin = require('lwc-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js')
  ],
  mode,
  devtool: mode === 'development' && 'source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
    new LwcWebpackPlugin(
    ),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
    /*
    new CopyWebpackPlugin([
      // Copy from `resources` in `lwc-services.config.js`
      // See below for details.
    ])
    */
  ]
};