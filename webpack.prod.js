const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            // This plugin uses terser to minify your JavaScript.
            // terser - A JavaScript parser and mangler/compressor toolkit for ES6+.
            new TerserJSPlugin({}),
            // A Webpack plugin to optimize \ minimize CSS assets.
            new OptimizeCSSAssetsPlugin({})
        ],
    },
});