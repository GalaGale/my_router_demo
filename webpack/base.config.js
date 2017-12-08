const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom'
];

module.exports = {
    // context: __dirname,
    entry: {
        bundle:'./src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(path.join(__dirname, '..'), 'build'),
        filename: '[name].[chunkhash:8].js'
        // publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 12000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ],
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', 'less-loader'],
                test: /\.less$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyWebpackPlugin([
            { from:'public/ggg.ggg', to:'ggg.ggg' }
        ])
    ]
};
