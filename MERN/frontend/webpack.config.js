const path = require("path");
const webpack = require('webpack');
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
    resolve: {
        fallback: {
            path: require.resolve('path-browserify')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            printLog: ['./src/utils/logger', 'printLog']
        }),
    ],
    // Other Webpack configuration...
};