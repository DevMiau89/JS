const path = require('path');
const distDir = path.resolve(__dirname, 'dist');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './app/index.js',
    output: {
        path: distDir,
        filename: 'boundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',

        }]
    },
    devServer: {
        contentBase: distDir
    },
    watch: true
       
}