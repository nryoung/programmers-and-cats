var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body'
});
var HotReloader = new webpack.HotModuleReplacementPlugin();

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/main'
  ],
  output: {
    path: 'dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'react-hot!babel',
        include: __dirname + '/app'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file?name=[path][name].[ext]',
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig, HotReloader],
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
