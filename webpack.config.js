import path from 'path'
import pandoc from 'pandoc'

module.exports = {
  entry: {
    api: 'src/api.js',
    convert: 'src/convert.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/[name].js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2017']
        }
      }
    ]
  },
  target: 'node',
  devtool: 'source-map'
}