const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

const apiDev='http://localhost:5000'
const api='http://api.royalty.ga'
const dev=process.env.NODE_ENV==='dev'

module.exports =
{
  entry:'./src/client/index.js',
  module:
  {
    rules:
    [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest)$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders:
        [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:
            {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template: './src/assets/foo.html',
        filename: 'foo.html'
      }
    ),
    new webpack.DefinePlugin
    (
      {
        __dev__:dev,
        __api__:'\''+api+'\'',
      }
    )
  ],
  resolve:
  {
    modules:
    [
      "node_modules",
      path.resolve("./")
    ],
    extensions: ['.js','.css','.scss','.sass','.ico','.png','.webmanifest']
  },
  watchOptions:
  {
    ignored:
    [
      path.join(__dirname, 'node_modules')
    ]
  }
}
