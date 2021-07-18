const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MinimizeCss = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Configure all plugins.
module.exports = {

    // the entry point to start
    entry: {

        // the actual source code folder
        app: ['babel-polyfill', "./src/index.js"]
    },
    
    // To make production faster.
    optimization: {

        // Code splitting: allows for caching of certain libraries.
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }

            }
        },
        // Configure css optimizer.
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),

            new MinimizeCss({
                minimizerOptions: { 
                    discardComments: true,
                }
            })
        ]

    },


    // Server optimization.
    devServer: {
        hot: true,
        compress: true,

        // Path to where to look for all the files.
        contentBase: path.join(__dirname, 'dist'),

        // To automatically open instead of typing localhost.
        open: true

    },
    
    devtool: 'source-map',

    // the output file name and path
    output: {
        filename: '[name].bundle.js',

        // the distribution folder
        path : path.resolve(__dirname, 'dist')
    },

    // Array of plugin objects to instantiate.
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[name].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
   
    // Module to configure sass loader, so webpack can load sass files.
    module: {

        // Rules: run any file ending with sccs through this module and use plugin.
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    "sass-loader"
                ]
            },

            // Rules: run any file ending with js through this module and use plugin.
            {
            test: /\.js$|jsx/,
            exclude: /node_modules/, // exlcude dir to not slow things down
            use: ['babel-loader']
                    },

            {
                test: /\.(png|jpg|gif)$/i,
                use: ['url-loader']
            }
        ]
    },

    // Anytime a file with these extensions is come across, handle it with the module
    resolve: {
        extensions: [
            '.js',
            '.scss'
        ]
    }

}