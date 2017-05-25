var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HashedModuleIdsPlugin = require('./HashedModuleIdsPlugin');

/**
 * [WebpackMd5Hash 根据文件内容生成 hash
 */
var WebpackMd5Hash = require('webpack-md5-hash');

/**
 * Dashboard webpack 命令控制台
 */
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();


// 辅助函数
var utils = require('./utils');
var fullPath  = utils.fullPath;
var pickFiles = utils.pickFiles;

var ROOT_PATH  = fullPath('../');                   // 项目根路径
var SRC_PATH   = ROOT_PATH + '/src';                // 项目源码路径
var DIST_PATH  = ROOT_PATH + '/dist';               // 产出路径
var DLL_PATH   = DIST_PATH + '/assets/dll';         // dll 产出路径
var commonPath = {                                  // 无需处理的静态资源目录
  staticDir: ROOT_PATH + '/static' 
};


var __DEV__ = process.env.NODE_ENV !== 'production';

var args = process.argv;
var uglify = args.indexOf('--uglify') > -1;


// conf
// import api from 'conf/api';
var alias = pickFiles({
  id: /(conf\/[^\/]+).js$/,
  pattern: SRC_PATH + '/conf/*.js'
});

// components
// import Alert from 'components/alert';
alias = Object.assign(alias, pickFiles({
  id: /(components\/[^\/]+)/,
  pattern: SRC_PATH + '/components/*/index.js'
}));

// reducers
// import reducers from 'reducers/index';
alias = Object.assign(alias, pickFiles({
  id: /(reducers\/[^\/]+).js/,
  pattern: SRC_PATH + '/js/reducers/*'
}));

// actions
// import actions from 'actions/index';
alias = Object.assign(alias, pickFiles({
  id: /(actions\/[^\/]+).js/,
  pattern: SRC_PATH + '/js/actions/*'
}));

var config = {
  context: SRC_PATH,
  commonPath:commonPath,
  entry: {
    app: [SRC_PATH + '/pages/index.js']
  },
  output: {
    path: DIST_PATH,
    filename: __DEV__ ? 'assets/[name].js' : 'assets/[name].[chunkhash].js',
  },
  module: {},
  resolve: {
    root: SRC_PATH,
    alias: alias 
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.DllReferencePlugin({
      context: ROOT_PATH,
      manifest: require(DLL_PATH + '/vendor-manifest.json'),
      name: 'vendor_library'
    }),
    new webpack.NamedModulesPlugin(),
    new HashedModuleIdsPlugin(),
    new WebpackMd5Hash(),
    new DashboardPlugin(dashboard.setData)
  ]
};


// loaders
var CACHE_PATH = ROOT_PATH + '/cache';
config.module.loaders = [];

// 使用 babel 编译 jsx、es6
config.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  // 这里使用 loaders ，因为后面还需要添加 loader
  loaders: ['babel?cacheDirectory=' + CACHE_PATH]
});

// 编译 sass
if (__DEV__) {
  config.module.loaders.push({
    test: /\.(scss|css)$/,
    loaders: ['style', 'css', 'postcss', 'sass']
  });
} else {
  config.module.loaders.push({
    test: /\.(scss|css)$/,
    loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
  });
  config.plugins.push(
    new ExtractTextPlugin('styles/[name].[contenthash].css')
  );
}

// css autoprefix
var precss = require('precss');
var autoprefixer = require('autoprefixer');
config.postcss = function() {
  return [precss, autoprefixer];
}

// 图片路径处理，压缩
config.module.loaders.push({
   test: /.*\.(gif|png|jpe?g|svg)$/i,
   loaders:[
      //图片小于 8k 就转换为 base64, 或者单独作为文件
      'url?limit=1000&name=styles/images/[hash:8].[name].[ext]',    
      // 图片压缩
      'image-webpack'   
    ]
});

// 压缩 js, css
if (uglify) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  );
}

// 去掉重复模块
if (!__DEV__) {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
}

// html 页面
var HtmlwebpackPlugin = require('html-webpack-plugin');
config.plugins.push(
  new HtmlwebpackPlugin({
    favicon: SRC_PATH + '/img/favicon.ico',
    filename: 'index.html',
    chunks: ['app', 'lib'],
    template: SRC_PATH + '/pages/index.html',
    minify: __DEV__ ? false : {
      // 删除空白符与换行符
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      // 移除HTML中的注释
      removeComments: true
    }
  })
);

// 内嵌 manifest 到 html 页面
config.plugins.push(function() {
  this.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(file, callback) {
      var manifest = '';
      Object.keys(compilation.assets).forEach(function(filename) {
        if (/\/?manifest.[^\/]*js$/.test(filename)) {
          manifest = '<script>' + compilation.assets[filename].source() + '</script>';
        }
      });
      if (manifest) {
        var htmlSource = file.html.source();
        htmlSource = htmlSource.replace(/(<\/head>)/, manifest + '$1');
        file.html.source = function() {
          return htmlSource;
        };
      }
      callback(null, file);
    });
  });
});

module.exports = config;




