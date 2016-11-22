'use strict';

module.exports = {
    context: __dirname,
    entry: './index',
    output: {
        filename: '[name].js',
        path: './static/build',
        library: '[name]'
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css!sass'
            },
            {
                test: /\.png$/,
                loader: 'url?limit=10000!img?progressive=true'
            }
        ]
    }
};