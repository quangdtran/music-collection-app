// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devServer = {
  port: 8008,
  host: 'localhost',
  open: false,
};

const VENDER_LIBS = [
  'axios',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk',
  'reselect',
  'styled-components',
];

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/app.js',
    vendor: VENDER_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
      },
      {
        use: ['eslint-loader'],
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/', '/dist/'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@components': path.resolve(__dirname, '.src/components'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer,
};
