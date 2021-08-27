var http = require("http");
var fs = require("fs");  // fs là file stream
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    fs.ReadStream("1.html").pipe(res);
}).listen(1234);