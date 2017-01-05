var config = require("./webpack.config.js");
//config.entry.app.unshift("webpack/hot/only-dev-server");
config.entry.app.unshift("webpack-dev-server/client?http://192.168.1.203:8080/");

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
// see http://webpack.github.io/docs/build-performance.html#sourcemaps
config.devtool = '#eval-cheap-module-source-map';

//var server = new WebpackDevServer(webpack(config),{
//  inline:true,
//  compress:true,
//  stats: {
//    chunks: false,
   // children: false,
   // colors: true
  //},
  //historyApiFallback: true,
//});

//server.listen(8080);

new WebpackDevServer(webpack(config), {
 contentBase: "./dist",
 inline: true,
 compress: true,
 stats: {
    chunks: false,
    children: false,
    colors: true
  },
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
}).listen(8080, function() {
 console.log('123');
});



