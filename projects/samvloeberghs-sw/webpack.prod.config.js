/** @format */

const webpackDev = require('./webpack.dev.config');

module.exports = Object.assign({}, webpackDev, {
    mode: 'production',
});
