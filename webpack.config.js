var webpack = require('webpack');
var getConfig = require('hjs-webpack')

var config = getConfig({
    in: 'src/app.js',
    out: 'dist',
    clearBeforeBuild: '!(images|favicon.ico)',
    isDev: process.env.NODE_ENV !== 'production',

    html: function (context) {
        //     debugger;
        return {
            'index.html': context.defaultTemplate({head: '<script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>'})
            //       'index.html': '<!doctype html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link rel="stylesheet" href="/0.513ad76d8de46c667fe4.hot-update.js"/><script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script></head><body><div id="root"></div></body><script src="/app.js"></script>'
            // if you build it entirely yourself it should be a complete HTML document
            // using whatever templating system you want
           // 'other.html': '<!DOCTYPE><body><h1>Hello World</h1></body>'
            // }
            // }
            //  eslint: {
            //   configFile: __dirname + '/.eslintrc',
            //   emitError: true
            // }
        }
    }
});
// Preloaders
// config.module.preLoaders =[{
//   test: /\.jsx$|\.js$/,
//   loader: 'eslint-loader',
//   exclude: /dist|node_modules/
// }];

// Plugins

//require("https://maps.googleapis.com/maps/api/js?libraries=places");
//config.module.loaders.push({ test: /\.(svg)$/, loader: 'raw-loader' });
config.plugins.push(new webpack.ProvidePlugin({'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}));


module.exports = config;
