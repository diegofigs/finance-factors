const NODE_ENV = process.env.NODE_ENV
var webpack = require('webpack')
var path = require('path')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

var libraryName = 'finance-factors'
var plugins = []
var outputFile

if (NODE_ENV === 'production') {
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    compress: true
  }))
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

var config = {
  entry: path.resolve('src/index.js'),
  devtool: NODE_ENV === 'staging' ? 'cheap-module-eval-source' : 'source-map',
  output: {
    path: path.resolve('lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: plugins
}

module.exports = config
