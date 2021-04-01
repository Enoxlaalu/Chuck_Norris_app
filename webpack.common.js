const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV = 'development';

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename('js'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        // remove/clean your build folder(s)
        new CleanWebpackPlugin(),
        // generate an HTML5 file for you that includes all your webpack bundles
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html.tpl'),
            sha: process.env.CI_COMMIT_SHORT_SHA
        }),
        // extracts CSS into separate files
        new MiniCssExtractPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css'],
        modules: [
            path.resolve('.'),
            'node_modules'
        ]
    }
};