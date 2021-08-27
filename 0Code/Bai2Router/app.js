var fs = require("fs");
function DocFile(duongdan,res)
{
    res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    fs.ReadStream(duongdan).pipe(res);
}
var load_router = function(req,res){
    var path = req.url ;
    switch (path)
    {
        case "/":
            {
                DocFile("trangchu.html",res);
                break;
            }
        case "/vantho":
            {
                DocFile("trang1.html",res);
                break;
            }
        default: DocFile("404.html",res);
    }
}
module.exports.load_router = load_router ;
