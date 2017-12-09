const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
var path = require('path');
const rootPath = path.join(__dirname, '..')

module.exports = merge(baseConfig, {

    devServer: {
        // contentBase: path.resolve(__dirname, './build'),
        // contentBase: path.resolve(rootPath, '/build'),
        port: 8082,
        historyApiFallback: true,
        inline: true,
        hot: true,
        // host: '0.0.0.0'
        // publicPath: '/build/'
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});