var http = require("http");
var app = require("./app.js");
http.createServer(app.load_router).listen(1234);