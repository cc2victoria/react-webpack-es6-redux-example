# react-biolerplate - react 项目模板
>Date:  2016-12-15 
>
>Email:lu.yanjiao@datatom.com


## Content
- [Code Tree](#t2h2)
- [Environment](#t3h2)
- [Getting started](#t4h2)
- [webpack 配置解析](#t5h2)
- [配置 React, ES6 & Babel 6](#t6h2)
- [图片处理](#t7h2)
- [样式处理](#t8h2)
- [Plugins](#t9h2)



## 1.Code Tree
	build
	|-- webpack.config.js               # 公共配置
	|-- webpack.dev.js                  # 开发配置
	|-- webpack.release.js              # 发布配置
	docs                                # 项目文档
    dist                                # 发布配置的源码
	node_modules                        
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
	|   |-- app.html                    # 入口页
	|   |-- app.js                      # 入口JS
	|-- components                      # 组件目录
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
	READNE.md  
	.babelrc                            # babel 配置文件    

## 2.Environment 
   - CentOS Linux 7
   - node v6.2.0
   - npm 3.8.9
   
## 3.Getting started
1.将代码解压到开发目录（这个地方的只能解压到linux下的开发环境，windows开发环境的依赖包没有打包）

2.将`modules.tar.gz`解压到项目根目录下

3.将`builld\util.js`下的`IPv4`的值改为自己的IP

4.运行`npm start`后，查看页面 [http://IP:8080]()


## 4.webpack 配置解析

### 4.1 核心配置

- webpack.config.js: `webpack` 的常核心配置，配置入口文件，输出文件，loaders，plugins
	
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
		  module: {
			loaders: [                                    // loaders
				{test: /\.js$/, loader: "babel"},
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
#### 4.1.1 配置 React, ES6 & Babel 6

目的：编译和解析 JS： JSX 、ES6

最新的babel 6.x 版本中，在指定哪些代码转换器将被启用时，需要配置 presets 。最简单配置的方法就是项目根目录下建一个 .babelrc 文件：

	  // .babelrc
	  {
	    "presets": [
	      "es2015",
	      "react"
	    ]
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

#### 4.1.2 图片处理  
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
- [image-webpack](https://www.npmjs.com/package/image-webpack-loader)应用于图片压缩，依赖于以下几个模块：

	- [gifsicle](https://github.com/kevva/imagemin-gifsicle)  - *Compress GIF images*
	- [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg) - *Compress JPEG images*
	- [optipng](https://github.com/kevva/imagemin-optipng)    - *Compress PNG images*
	- [svgo](https://github.com/imagemin/imagemin-svgo)       - *Compress SVG images*
	- [pngquant](https://pngquant.org/)                       - *Compress PNG images*

#### 4.1.3 样式处理
目的：`.css`和`.scss`文件进行编译	

    config.module.loaders.push({
	    test: /\.(scss|css)$/,
	    loaders: ['style', 'css', 'postcss', 'sass']
	 });
- style-loader
- sass-loader
- postcss
- node-sass 

#### 4.1.4 Plugins

- 代码热替换：HotModuleReplacementPlugin

- 生成html文件：HtmlWebpackPlugin

- 报错但不退出webpack进程：NoErrorsPlugin

- 代码压缩：UglifyJsPlugin

- 设置环境变量： DefinePlugin


### 4.2 环境配置
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
webpack.dev.js: 将`webpack-dev-server`的配置单独作为一个配置文件，应用于开发环境。查看日志、错误报告，sourcemap和部署测试服务环境

		<!-- webpack.dev.js -->
		var webpack = require('webpack');
		var webpackDevServer = require('webpack-dev-server');
		var config = require('./webpack.config.js');		
		
		config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

		var compiler = webpack(config);
		var server = new webpackDevServer(compiler, {
		  historyApiFallback: true,
		  hot: true,
		  inline: true,
		  progress: true,
		  contentBase: './app',
		  stats: { colors: true }
		});
		
		server.listen(8080, "localhost", function(err) {
		  if(err) {
		    console.log(err);
		  }
		  console.log('Listening at localhost:8080...');
		});

#### 4.2.2 生产环境（待补充）

## 5.构建流程图

![](http://i.imgur.com/aM2APmM.png)



## 6.常见错误
### 6.1 安装时错误
 
- 安装node-sass时会报错。解决方法：`SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass --save-dev`		
### 6.2.执行时错误：

![](http://i.imgur.com/f3a77R9.png)

- 错误1：系统缺少`libpng.so.0`的库。  解决方法：`yum install */libpng12.so.0 `  `yum install libpng12.x86_64`

- 错误2：是由错误1导致的，因为缺少库，所以在安装image-webpack所依赖的几个模块，如：pngquant,没有产生执行文件，解决方法：重新安装`npm uninstall image-webpack-loader && npm install image-webpack-loader`
 
    
## 7.参考文档
1. [https://github.com/chenbin92/react-redux-webpack-starter/issues/1](https://github.com/chenbin92/react-redux-webpack-starter/issues/1)          



