const nodeExternals = require('webpack-node-externals')

module.exports=
{
  target: 'node',
  externals: [nodeExternals()],
  entry:
  {
    server: './src/server/index.js'
  },
  output:
  {
    filename: '[name].js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve:
  {
    modules:
    [
      "node_modules"
    ],
    extensions: ['.js']
  }
}
