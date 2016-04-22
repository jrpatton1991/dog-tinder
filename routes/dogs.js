var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router.get('/', function(req, res, next) {
 Dog.find({}, function(err, dogs) {
   if (err) {
     res.status(500).send();
   } else {
     res.json(dogs[0]);
   }
 })
});

module.exports = router;
