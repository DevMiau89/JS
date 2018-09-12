const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    plugins:  [
        new UglifyJSPlugin({
                    parallel: true,  
                    cache: true      
                    uglifyOptions: {
                        
                        compress: { inline:false },
                    },
                })
  ]
}