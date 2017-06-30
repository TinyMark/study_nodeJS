const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
    // POST -- req

    var str = '';//接受数据

    // data有一段数据到达（很多次）
    var i = 0;
    req.on('data', function (data) {
        console.log(`第 ${i++} 次收到数据`);
        str += data;
    })
    req.on('end', function () {
        var post = querystring.parse(str);
        console.log(post);
    })
}).listen(8080);