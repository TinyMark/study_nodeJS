const http = require('http');

http.createServer(function (req, res) {
    var GET = {};
    // 通过split自己切割，获取get请求的数据
    if (req.url.indexOf('?') != -1) {
        var arr = req.url.split('?');
        var url = arr[0];
        var arr2 = arr[1].split('&');

        for (var i = 0; i < arr2.length; i++) {
            var arr3 = arr2[i].split('=');
            GET[arr3[0]] = arr3[1];
        }

        console.log(req.url);
    } else {
        var url = req.url;
    }
    console.log(url, GET);
    // req获取前台请求数据
    res.write('aaa');
    res.end();
}).listen(8080);