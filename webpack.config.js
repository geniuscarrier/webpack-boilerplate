var path = require('path');
var commonConfig = require('./webpack.common.config');

var output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://www.example.com/build/',
    filename: 'bundle.js'
};

module.exports = Object.assign(commonConfig, {
    output: output,
    module: {
        loaders: commonConfig.module.loaders.concat({
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            loaders: ['style', 'css', 'autoprefixer-loader', 'sass'] // For single buddle js
        })
    }
});
