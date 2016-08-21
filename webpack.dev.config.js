var path = require('path');
var commonConfig = require('./webpack.common.config');

var output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:8080/build/',
    filename: 'bundle.js'
};

module.exports = Object.assign(commonConfig, {
    output: output,
    devtool: 'source-map',
    module: {
        loaders: commonConfig.module.loaders.concat({
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'] // For debugging css
        })
    }
});
