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
/* Thêm Dữ liệu. */
router.get('/them', function(req, res, next) {
  var dulieu =
  {
    "ten":"NguyenVanTho15",
    "tuoi":"256",
    "lop":"18CDT1"
  }
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.insertOne(dulieu, function(err, result)
     {
      assert.equal(err, null);
      console.log("Thêm dữ liệu thành công");
      console.log(result);
      client.close();
    });
  });
});
/* Lấy Dữ liệu. */
router.get('/lay', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({'ten': "NguyenVanTho"}).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("Lấy dữ liệu thành công");
      console.log(docs);
      client.close();
    });
  });
});
/* Lấy 5 Dữ liệu đầu. */
router.get('/laylimit', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({'ten': "NguyenVanTho15"}).limit(2).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("Lấy 2 dữ liệu thành công");
      console.log(docs);
      client.close();
    });
  });
});
/* Lấy 1 Dữ liệu bỏ 2 dữ liệu đầu. */
router.get('/laylimit1', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({'ten': "NguyenVanTho15"}).limit(1).skip(2).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("Lấy 2 dữ liệu thành công");
      console.log(docs);
      client.close();
    });
  });
});
/* Lấy tất cả Dữ liệu. */
router.get('/layall', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({}).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("Lấy all dữ liệu thành công");
      console.log(docs);
      client.close();
    });
  });
});
/* Update Dữ liệu. */
router.get('/update', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.updateOne({ "ten" : "NguyenVanTho15" }
      , { $set: { "tuoi" : "30" ,"ten":"NguyenVanThoxxx"} }, function(err, result) {
      assert.equal(err, null);
      console.log(result);
      console.log("Updated ok");
      client.close();
    }); 
  });
});
/* Xóa Dữ liệu. */
router.get('/xoa', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.deleteOne({ "ten" : "NguyenVanTho15" }, function(err, result) {
      console.log("Xóa thành công");
      client.close();
    }); 
  });
});
/* Xóa nhiều Dữ liệu. */
router.get('/xoaall', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.deleteMany({ "ten" : "NguyenVanTho15" }, function(err, result) {
      console.log("Xóa all thành công");
      client.close();
    }); 
  });
});
/* xắp xếp Dữ liệu. */
router.get('/xapxep', function(req, res, next) {
  client.connect(function(err) 
  {
    const db = client.db(dbName);
    const collection = db.collection('BangDL');
    collection.find({}).toArray(function(err, docs)
     {
      assert.equal(err, null);
      console.log("xắp xếp dữ liệu thành công");
      console.log(docs);
      client.close();
    });
  });
});

/* Test truyền Dữ liệu. */
router.get('/truyen.html', function(req, res, next) {
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
 
module.exports = router;
