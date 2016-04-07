var ProvidePlugin = require('webpack').ProvidePlugin;
var path = require('path');

module.exports = {
    entry: [
        './js/app.js'
    ],
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            // loaders: ['style', 'css', 'autoprefixer-loader', 'sass'] // For single buddle js
            loaders: ['style', 'css?sourceMap', 'autoprefixer-loader', 'sass?sourceMap'] // For debugging css
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif)$/,
            exclude: /(node_modules)/,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "windows.jQuery": 'jquery',
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css'],
        alias: {
            "scrollTo": path.resolve(
                __dirname,
                "node_modules/jquery.scrollto/jquery.scrollTo.min"
            ),
            "waypoints": path.resolve(
                __dirname,
                "node_modules/waypoints/lib/jquery.waypoints.min"
            ),
        }
    }
};
