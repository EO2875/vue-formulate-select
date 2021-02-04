const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // Disables attributes processing
                    attributes: false,
                },
            },
        ],
    },
    output: {
        filename: 'index.js',
    },
    externals: {
        'vue-select': 'vSelect'
    },
    mode: 'production',
}