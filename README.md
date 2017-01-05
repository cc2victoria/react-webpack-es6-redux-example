## 项目结构规划


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

## 代码使用

1.将代码解压到开发目录（这个地方的只能解压到linux下的开发环境，windows开发环境的依赖包没有打包）

2.将`modules.tar.gz`解压到根目录下

3.将`builld\util.js`下的`IPv4`的值改为自己的IP

4.运行`npm start`后，查看页面


## webpack 解析

1.编译和解析 JSX、ES6、SCSS

- 使用 `babel` 和 `babel-loader` 编译 `jsx`和`es6`代码
- `babel-preset-es2015` 用于解析 `es6`
- `babel-preset-react` 用于解析 `jsx`               



