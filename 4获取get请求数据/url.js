const urllib = require('url');

var obj = urllib.parse('http://www.baidu.com/index?a=123&b=999',true);

console.log(obj);