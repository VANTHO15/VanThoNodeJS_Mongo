var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// kết nối mongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'ThemSuaXoa';
const client = new MongoClient(url);

/* Truyền Dữ liệu. */
router.get('/ReactToNote', function(req, res, next) {
   var ten=req.query.ten;
   var tuoi=req.query.tuoi;
   client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({'ten': "NguyenVanTho15"}).limit(2).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("Lấy 2 dữ liệu thành công");
      res.send(JSON.stringify(docs) + " " + ten +" "+ tuoi );
      res.end();
      client.close();
    });
  });
});
/* Nhận Dữ liệu. */
router.post('/NoteToReact', function(req, res, next) {
   var ten=req.query.ten;
   var tuoi=req.query.tuoi;
   
   var dulieu1= req.body.dataTruyen1;
   var dulieu2= req.body.dataTruyen2;
   var dulieu3= req.body.dataTruyen3;
   console.log(dulieu1+ " "+ dulieu2+" "+dulieu3+ " "+ ten +" "+ tuoi );
   res.send("ThanhCong");
});
 
module.exports = router;
