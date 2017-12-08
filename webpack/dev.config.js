const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
var path = require('path');

module.exports = merge(baseConfig, {

    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        port: 8082,
        historyApiFallback: true
        // inline: true,
        // hot: true,
        // host: '0.0.0.0'
    }

});