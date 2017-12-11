var express = require('express');
var path = require('path');
var router = new express.Router();



// router.get("/", function(req, res){
//   // res.json({ data: "Hello World!" });
//   // res.json({ data: "Hello World, it's a cold one" });
//   res.sendFile(__dirname + "/index.html");
// });

// router.get('/', function(req, res){
//   res.json({ data: "Welcome!"});
// });

router.use('/films', require('./films'));
//
// router.get("/about", function(req, res){
//   res.json({ data: "All about us"});
// });

module.exports = router;
