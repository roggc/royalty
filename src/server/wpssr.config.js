const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const dev=process.env.NODE_ENV==='dev'

module.exports =
{
  target: 'node',
  externals: [nodeExternals()],
  entry:
  {
    ssr: './src/server/ssr.js'
  },
  output:
  {
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module:
  {
    rules:
    [
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
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin
    (
      {
        __dev__:dev
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
    extensions: ['.js','.css','.scss','.sass']
  },
  watchOptions:
  {
    ignored:
    [
      path.join(__dirname, 'node_modules')
    ]
  }
}
