const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports =
{
  target: 'node',
  externals: [nodeExternals()],
  entry:
  {
    ssr: './ssr.js'
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
    new MiniCssExtractPlugin()
  ],
  resolve:
  {
    modules:
    [
      "node_modules",
      path.resolve(__dirname, "./")
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
