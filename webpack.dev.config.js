var path = require('path');
var commonConfig = require('./webpack.common.config');

var output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:8080/build/',
    filename: 'bundle.js'
};

module.exports = Object.assign({
    output: output
}, commonConfig);
