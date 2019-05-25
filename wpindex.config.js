const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports =
{
  entry:'./index.js',
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
        template: './index.html',
        filename: 'foo.html'
      }
    )
  ],
  resolve:
  {
    modules:
    [
      "node_modules",
      path.resolve(__dirname, "./")
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
