/*
  用于测试 dist 文件夹中生成的静态网页文件
  使用方式：PORT=3000 HOST=192.168.1.203 node server.js
            PORT 服务监听的端口号，默认是 8080
            HOST 服务监听的主机IP地址，默认是 172.0.0.1
*/

const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const host = process.env.HOST || '127.0.0.1'
const app = express()

// 通常用于加载静态资源
app.use(express.static(__dirname + '/dist'))

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

const server = app.listen(port, host, function() {
  let h = server.address().address;
  let p = server.address().port;
  console.log('Mock server listening at http://%s:%s', h, p);
});

