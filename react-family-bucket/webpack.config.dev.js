const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devPath = './dev'
const srcRoot = './src';
module.exports = {
  // 输入配置
  entry: {
    index: path.resolve(srcRoot, './page/index/index.js'),
  }
  ,
  mode: 'development',
  // 输出配置
  output: {
    path: path.resolve(__dirname, './dev'),
    filename: '[name].min.js'
  },
  module: {
    // 加载器配置
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'], include: path.resolve(srcRoot), exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'], include: path.resolve(srcRoot), exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]', include: path.resolve(srcRoot), exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }], include: path.resolve(srcRoot), exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader/webpack']
      },
      { test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }], include: path.resolve(srcRoot) },
    ]
  },
  devServer: {
    "contentBase": devPath,
    "compress": true,
    "hot": true, //开启HMR
    host: '0.0.0.0',
    port: '3000',
    "overlay": true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(devPath, 'index.html'),
      template: path.resolve(srcRoot, './page/index/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  stats: {
    children: false
  },
};