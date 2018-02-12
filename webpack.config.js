var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
  entry: './index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, "build"),
    filename: 'index.js',
    library: "index",
    libraryTarget: "commonjs2"
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new UglifyJSPlugin()
 ]
},{
  entry: './index2.js',
  target: 'node',
  output: {
    path: path.join(__dirname, "build"),
    filename: 'index2.js',
    library: "index",
    libraryTarget: "commonjs2"
  },
  node: {
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new UglifyJSPlugin()
 ]
}


]