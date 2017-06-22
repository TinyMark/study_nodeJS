const http = require('http');
const urllib = require('url');

http.createServer(function (req, res) {
    var obj = urllib.parse(req.url, true);
    // 使用url模块，获取get请求的数据，通过第二个参数true/false控制输出格式
    var url = obj.pathname;
    var GET = obj.query;

    console.log(url, GET);
    // req获取前台请求数据
    res.write('aaa');
    res.end();
}).listen(8080);