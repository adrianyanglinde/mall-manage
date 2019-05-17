const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',

    //which maps your compiled code back to your original source code
    devtool: 'inline-source-map',

    //webpack-dev-server provides you with a simple web server and the ability to use live reloading
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        compress: true,
        port: 9000,
        proxy: [
            {
                 context: '/manage',
                 target: 'http://admintest.happymmall.com',
                 changeOrigin: true,
                 secure: false
           }
        ],
        //HMR  It allows all kinds of modules to be updated at runtime without the need for a full refresh.
        hot: true,     //open Hot Module Replacement

        historyApiFallback : {
            index : '/dist/index.html'
        }

    },

    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].bundle.js",
        //The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000. 
        publicPath: '/dist/'     //TODO: packed url can replace by CDN
    }
    
});