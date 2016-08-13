var path = require('path');

var dir_src = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'dist/js');

module.exports = {
    entry: {
        main: path.resolve(dir_src, 'main.js')
    },
    output: {
        path: dir_build,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_src,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};
