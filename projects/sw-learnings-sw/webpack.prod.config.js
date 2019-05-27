/** @format */

const webpackDev = require('./webpack.dev.config');

module.exports = Object.assing({}, webpackDev, {
    mode: 'production',
});
