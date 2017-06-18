//const 只读，不改
const http = require('http');

//request 请求
//response 响应
var server = http.createServer(function (req, res) {
    // console.log('你来了');
    // console.log(req.url);
    // res.write('abc');

    switch (req.url) {
        case '/1.html':
            res.write('111');
            break;
        case '/2.html':
            res.write('222');
            break;
        default:
            res.write('404')
            break;
    }

    res.end();
})

server.listen(8080);