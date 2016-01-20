var webpack = require('webpack');
var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/app.js',
  out: 'dist',
  clearBeforeBuild: '!(images|favicon.ico)',
  isDev: process.env.NODE_ENV !== 'production'

  //   html: function (context) {
  //   return {
  //     'index.html': context.defaultTemplate(),
  //
  //     // if you build it entirely yourself it should be a complete HTML document
  //     // using whatever templating system you want
  //     //'other.html': '<!DOCTYPE><body><h1>Hello World</h1></body>'
  //   }
  // }
  //  eslint: {
  //   configFile: __dirname + '/.eslintrc',
  //   emitError: true
  // }
});

// Preloaders
// config.module.preLoaders =[{
//   test: /\.jsx$|\.js$/,
//   loader: 'eslint-loader',
//   exclude: /dist|node_modules/
// }];

// Plugins


//config.module.loaders.push({ test: /\.(svg)$/, loader: 'raw-loader' });
config.plugins.push(new webpack.ProvidePlugin({'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}));


module.exports = config;
