/**
 *  ./node_modules/.bin/webpack --config build/webpack.dll.config.js 
 *  生成 dll 库，请在每次 vendor 下的文件更改时重新执行这个命令
 */

const path = require('path');
const webpack = require('webpack');
// 辅助函数
var utils = require('./utils');
var fullPath  = utils.fullPath;

// 路径
var ROOT_PATH = fullPath('../');                    // 项目根路径
var SRC_PATH = ROOT_PATH + '/src';                     // 项目源码路径
var DLL_PATH = ROOT_PATH + '/dist/assets/dll';   

module.exports = {
  entry: {
    vendor: [
      'react', 'react-dom', 'react-router', 
      'redux', 'react-redux', 'redux-thunk', 'axios'
    ]
  },
  output: {
    path: DLL_PATH,
    filename: '[name].dll.js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(DLL_PATH, '[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。 
       */
      name: '[name]_library',
    })
  ]
};