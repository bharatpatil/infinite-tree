var path = require('path');
var webpack = require('webpack');

var env = process.env.BUILD_ENV;
var plugins = [];

if (env === 'dist') {
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]);
} else {
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = {
    debug: (env === 'debug'),
    devtool: (env === 'debug') ? 'source-map' : '',
    entry: path.resolve(__dirname, 'lib/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: env === 'dist' ? 'infinite-tree.min.js' : 'infinite-tree.js',
        libraryTarget: 'umd',
        library: 'InfiniteTree'
    },
    plugins: plugins
};