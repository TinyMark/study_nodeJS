//const 只读，不改
const http = require('http');

//request 请求
//response 响应
var server = http.createServer(function (req, res) {
    // console.log('你来了');
    res.write('abc'); 
    res.end();
})

server.listen(3000);