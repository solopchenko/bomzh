/* jshint esversion: 6 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname,
    devtool: NODE_ENV == 'development' ? 'source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css'),
    ],
    entry: {
        app: './source/index.js',
        likely: './source/vendors/likely/likely.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'resolve-url-loader',
                        'sass-loader?sourceMap',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    './source/styles/_variables.scss',
                                    './source/styles/_mixins.scss'
                                ]
                            }
                        },
                    ]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader', 'stylus-loader']
                })
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)($|\?)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }
        ]
    }
};
