var webpack = require("webpack");

module.exports = {
    entry: "./client/index.js",
    output: {
        path: "./static/js",
        filename: "pickr.js"
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: [ "es2015" ]
            }
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "lodash",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        extensions: [ "", ".js" ]
    }
};
