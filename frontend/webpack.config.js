const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "fs": false, // Use false if you don't need 'fs' in the browser
            "path": require.resolve("path-browserify") // Polyfill for 'path'
        }
    },
    // Other Webpack configurations...
};