const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const appConfig = {
    context: __dirname,
    entry: './_dev/custom/js/main.js',
    output: {
        path: path.resolve('./assets/'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [
                // fallback to style-loader in development
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {from:'./_dev/custom/images',to:'images'}
        ]),
    ]
};

module.exports = [appConfig];