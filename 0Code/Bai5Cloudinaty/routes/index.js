var express = require('express');
var router = express.Router();
// npm install cloudinary --save
// connect Cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'vantho15',
  api_key: '747287321688789',
  api_secret: '5ar0i0jNmBRpD6sZOIk7g-aL2Mk'
});  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Tải ảnh lên tự đặt tên và đường dẫn */
router.get('/anh', function(req, res, next) {
  cloudinary.v2.uploader.upload("routes/images/8.jpg", 
    { folder: "myfolder/", public_id: "anhso8" },
    function(error, result) {console.log(result, error); });
});
/* Tải ảnh lên và lấy luôn tên ảnh */
router.get('/hihi', function(req, res, next) {
  cloudinary.v2.uploader.upload("routes/images/9.jpg", 
    { folder: "myfolder/", use_filename : true ,  unique_filename : false },
    function(error, result) {console.log(result, error); });
});

module.exports = router;
