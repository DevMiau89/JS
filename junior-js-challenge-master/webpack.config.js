const path = require('path');

const distDir = path.resolve(__dirname, 'junior-js-challenge-master');


module.exports = {
    entry: './src/scripts.js',
    output: {
        path: distDir + 'dist/static',
        filename: 'myBundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',

        }]
    },
}