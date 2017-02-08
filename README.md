# react-biolerplate - react 项目模板
## 目录	
- [1 Code Tree](#1code-tree)
- [2 开发环境](#2开发环境)
- [3 Getting started](#3getting-started)
- [4 webpack 配置解析](#4webpack-配置解析)
	- [4.1 安装](#41-安装)
	- [4.2 核心配置](#42-核心配置)
		- [4.2.1 配置 React, ES6 & Babel 6](#421-配置-react-es6--babel-6)
		- [4.2.2 图片处理](#422-图片处理)
		- [4.2.3 样式处理](#423-样式处理)
		- [4.2.4 Plugins](#424-Plugins)
	- [4.3 环境配置](#43-环境配置)
		- [4.3.1 开发环境](#431-开发环境)
		- [4.3.2 生产环境](#432-生产环境)
- [5 构建流程](#5构建流程图)
- [6 其他配置](#6其他配置)
- [7 常见错误](#7常见错误)
	- [7.1 安装时错误](#71-安装时错误)
	- [7.2 运行时错误](#72-运行时错误)
- [8 参考文档](#8参考文档)

## 1.Code Tree
	build
	|-- webpack.config.js               # 公共配置
	|-- webpack.dev.js                  # 开发配置
	|-- webpack.release.js              # 发布配置
	docs                                # 项目文档
    dist                                # 发布配置的源码
	node_modules  
	bower_components                      
	src                                 # 项目源码
	|-- conf                            # 配置文件
	|-- pages                           # 页面目录
	|   |-- page1                       
	|   |   |-- index.js                # 页面逻辑
	|   |   |-- index.scss              # 页面样式
	|   |   |-- img                     # 页面图片
	|   |   |   |-- xx.png          
	|   |   |-- __tests__               # 测试文件
	|   |   |   |-- xx.js
	|   |-- index.html                  # 入口页
	|   |-- index.js                    # 入口JS
	|   |-- routes.js                   # 路由配置
	|-- components                      # 公共组件目录
	|   |-- loading
	|   |   |-- index.js
	|   |   |-- index.scss
	|   |   |-- __tests__               
	|   |   |   |-- xx.js
	|-- js
	|   |-- actions
	|   |   |-- index.js
	|   |   |-- __tests__               
	|   |   |   |-- xx.js
	|   |-- reducers 
	|   |   |-- index.js
	|   |   |-- __tests__               
	|   |   |   |-- xx.js
	|   |-- xx.js                 
	|-- css                             # 公共CSS目录
	|   |-- common.scss
	|-- img                             # 公共图片目录
	|   |-- xx.png
	tests                               # 其他测试文件
	package.json     
    bower.json                                        
	READNE.md  
	.babelrc                            # babel 配置文件    

## 2.开发环境 
   - CentOS Linux 7
   - node v6.2.0
   - npm 3.8.9
   
## 3.Getting started
1.将代码解压到开发目录（这个地方的只能解压到linux下的开发环境，windows开发环境的依赖包没有打包）

2.将`modules.tar.gz`解压到项目根目录下

3.将`builld\util.js`下的`IPv4`的值改为自己的IP

4.运行`npm start`后，查看页面 [http://IP:8080]()


## 4.webpack 配置解析

### 4.1 安装

全局安装

     $ npm install -g webpack
     $ webpack -v => webpack 1.14.0

项目依赖

     $ npm install webpack --save-dev

### 4.2 核心配置

 `webpack` 的核心配置主要包括 **entry**，**output**，**resolve**，**module**，**plugins** 这五个部分
	
	<!-- webpack.config.js -->
	var webpack = require('webpack');
	var path = require('path');
	var config = {
	  entry: [
	    path.resolve(__dirname, 'app/index.js')       // 入口文件
	  ],
	  output: {                                       // 出口目录
	    path: path.resolve(__dirname, 'build'),
	    filename: 'bundle.js',
	    publicPath: '/'
	  },
	  resolve: {                                      // resolve
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
      },
	  module: {
		loaders: [                                    // loaders
			{test: /\.js$/, loader: "babel",exclude: /(node_modules|bower_components)/},
			{test: /\.css$/, loader: "style!css"},
			{test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{test: /\.scss$/, loader: "style!css!sass"}
		]
	  }
	  plugins: [                                      // plugins
	    new HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin(),
		new UglifyJsPlugin()
	  ]
	}
	
	module.exports = config;

- **entry**: 入口,定义要打包的文件
- **output**: 出口，定义打包输出的文件；包括路径，文件名，还可能有运行时的访问路径（publicPath）参数
- **module**: webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
	- **test**: 正则表达式，检测文件名
	- **exclude**: 忽略的文件
- **resolve**: 定义能够被打包的文件，文件后缀名
- **plugins**: 定义一些额外的插件


#### 4.2.1 配置 React, ES6 & Babel 6
babel 安装： `$ npm install babel babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`
react 安装：`$ npm install react react-dom react-redux react-router redux react-thunk --save`

目的：编译和解析 JS： JSX 、ES6

最新的babel 6.x 版本中，在指定哪些代码转换器将被启用时，需要配置 presets 。最简单配置的方法就是项目根目录下建一个 .babelrc 文件：

	  // .babelrc
	  {
	    "presets": ["es2015", "react"]
	  }
webpack.config.js中的配置：

	config.module.loaders.push({
	  test: /\.js$/,
	  exclude: /node_modules/,
	  // 这里使用 loaders ，因为后面还需要添加 loader
	  loaders: ['babel?cacheDirectory=' + CACHE_PATH]
	});

- 使用 `babel` 和 `babel-loader` 编译 `jsx`和`es6`代码
- `babel-preset-es2015` 用于解析 `es6`
- `babel-preset-react` 用于解析 `jsx` 

#### 4.2.2 图片处理
安装：`$ npm install url-loader image-webpack-loader --save-dev`  
目的：对图片进行打包

    // 图片路径处理，压缩
	config.module.loaders.push({
	  test: /\.(?:jpg|gif|png|svg)$/,
	  loaders: [
		// 对小于 8kb 的图片将会以base64的形式内联在代码中，超过这个大小就会变成独立文件
	    'url?limit=8000&name=/img/[hash].[ext]',
		// 压缩图片
	    'image-webpack'
	   ]
	});

- [url-loader](https://github.com/webpack/url-loader/) 对图片路径进行压缩
- [image-webpack](https://www.npmjs.com/package/image-webpack-loader) 应用于图片压缩，依赖于以下几个模块：
	- [gifsicle](https://github.com/kevva/imagemin-gifsicle)  - *Compress GIF images*
	- [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg) - *Compress JPEG images*
	- [optipng](https://github.com/kevva/imagemin-optipng)    - *Compress PNG images*
	- [svgo](https://github.com/imagemin/imagemin-svgo)       - *Compress SVG images*
	- [pngquant](https://pngquant.org/)                       - *Compress PNG images*

#### 4.2.3 样式处理
- 安装：`$ npm install css-loader style-loader sass-loader node-sass postcss-loader precss --save-dev`
- 目的：`.css`和`.scss`文件进行编译	
- 示例:


	    config.module.loaders.push({
		    test: /\.(scss|css)$/,
		    loaders: ['style', 'css', 'postcss', 'sass']
		 });

#### 4.2.4 Plugins

- 代码热替换：HotModuleReplacementPlugin

- 生成html文件：HtmlWebpackPlugin

- 报错但不退出webpack进程：NoErrorsPlugin

- 代码压缩：UglifyJsPlugin

- 设置环境变量： DefinePlugin


### 4.3 环境配置
在项目的实际开发中，会将项目分为以下两个环境：

- 开发环境： 需要日志输出，sourcemap ，错误报告等等

- 生产环境：需要做代码压缩，对文件名进行 hash 处理等等

`webpack` 提供了 `DefinePlugin` 设置环境变量，后面会根据设置的不同环境变量决定是否打包压缩，还是启动dev server 或者是 prod server

	<!-- webpack.config.js -->
	plugins: [
	    ...
	    new webpack.DefinePlugin({
	        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development') // or production
	    }),
	]

	// 判断是否是生成环境
	var __DEV__ = process.env.NODE_ENV !== 'production';

使用方法： `NODE_ENV=development node build/webpack.dev.js --hot`


#### 4.2.1 开发环境
将`webpack-dev-server`的配置单独作为一个配置文件，应用于开发环境。查看日志、错误报告，sourcemap和部署测试服务环境

	<!-- webpack.dev.js -->

	var webpack = require('webpack');
	var webpackDevServer = require('webpack-dev-server');
	var config = require('./webpack.config.js');		
	
	config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

	var compiler = webpack(config);
	var server = new webpackDevServer(compiler, {     // 初始化webpack-dev-server   
	  historyApiFallback: true,
	  hot: true,
	  inline: true,
	  progress: true,
	  contentBase: './app',
	  stats: { colors: true }
	});
	
	server.listen(8080, "localhost", function(err) {   // 监听IP和端口号
	  if(err) {
	    console.log(err);
	  }
	  console.log('Listening at localhost:8080...');
	});

#### 4.2.2 生产环境
生产环境主要是对代码进行压缩，对文件进行处理，打包到`/dist`文件的目录下

	<!-- webpack.release.js -->
    var webpack = require('webpack');
	var config = require('./webpack.config');
	
	var args = process.argv;
	var watch = args.indexOf('--watch') > -1;
	var online = args.indexOf('--deploy=online') > -1;
	
	// 测试环境静态资源 domain
	var testPublicPath = '/';
	// 生产环境静态资源 domain
	var onlinePublicPath = '/';
	
	if (online) {
	  config.output.publicPath = onlinePublicPath; 
	} else {
	  config.output.publicPath = testPublicPath; 
	}
	
	var compiler = webpack(config);
	
	function callback(err, stats) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log(stats.toString({
	      colors: true,
	      chunks: false,
	      children: false,
	    }));  
	  }
	}
	
	if (watch) {
	  compiler.watch({}, callback);
	} else {
	  compiler.run(callback);
	}


## 5.构建流程图
![](http://i.imgur.com/P98LOd1.png)

## 6 其他配置
### 6.1 webpack中bower的配置

- 安装：`$ npm install bower -g`
- 配置：[bower 在webpack 中的配置](http://webpack.github.io/docs/usage-with-bower.html)
- 报错：添加 **--allow-root**
- 示例： `bower install bootstrap#v4.0.0-alpha.5 --allow-root`


请求 [https://daveceddia.com/ajax-requests-in-react/](https://daveceddia.com/ajax-requests-in-react/)

## 7.常见错误
### 7.1 安装时错误
 
- 安装node-sass时会报错。解决方法：`SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass --save-dev`		
### 7.2.执行时错误

![](http://i.imgur.com/f3a77R9.png)

- 错误1：系统缺少`libpng.so.0`的库。  解决方法：`yum install */libpng12.so.0 `  `yum install libpng12.x86_64`

- 错误2：是由错误1导致的，因为缺少库，所以在安装image-webpack所依赖的几个模块，如：pngquant,没有产生执行文件，解决方法：重新安装`npm uninstall image-webpack-loader && npm install image-webpack-loader`
      
## 8.参考文档
1. [基于 webpack 搭建前端工程基础篇 ](https://github.com/chenbin92/react-redux-webpack-starter/issues/1)  
2. [如何学习React](https://github.com/petehunt/react-howto/blob/master/README-zh.md#user-content-%E5%AD%A6%E4%B9%A0-react-%E6%9C%AC%E8%BA%AB)    
3. [webpack 官方文档](http://webpack.github.io/docs/)    
4. [react 入门教程](https://hulufei.gitbooks.io/react-tutorial/content/introduction.html)



