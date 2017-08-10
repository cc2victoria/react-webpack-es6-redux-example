var glob = require('glob');
var path = require('path');

/*  选择文件
pickFiles({
  id: /([^\/]+).js$/,
  pattern: './src/base/*.js',
});
*/
exports.pickFiles = function(options) {
  var files = glob.sync(options.pattern);
  return files.reduce(function(data, filename) {
    var matched = filename.match(options.id);
    var name = matched[1];
    data[name] = path.resolve(__dirname, filename);
    return data;
  }, {}); 
};

 /**
 * [获取当前目录的全路径]
 * @param  {[type]} dir [description]
 * @return {[type]}     [description
 */
exports.fullPath = function(dir) {
  return path.resolve(__dirname, dir);
};

// 获取 当前系统外网 IPv4 地址
exports.getIP = function() {
  var os = require('os');
  var IPv4 = '127.0.0.1';
  var interfaces = os.networkInterfaces();
  for (var key in interfaces) {
    interfaces[key].some(function(details){
      if (details.family == 'IPv4' && details.address !== '127.0.0.1') {
        IPv4 = details.address;
        return true;
      }
    });
  }
  return IPv4;
}
