var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');


router.get('/', function(req, res, next) {
 Dog.find({liked: null}, function(err, dogs) {
   if (err) {
     res.status(500).send();
   } else {
    if (dogs.length > 0) {
      res.json(dogs[0]);
    } else {
      res.json({status: 'no mo dogs'});
    }
   }
 })
});

router.get('/', function(req, res, next) {
 Dog.find({liked: true}, function(err, dogs) {
   if (err) {
     res.status(500).send();
   } else {
    if (dogs.length > 0) {
      res.json(dogs);
    } else {
      res.json({status: 'no dogs to display'});
    }
   }
 })
});

router.put('/:dogId', function(req, res, next) {
  Dog.findByIdAndUpdate(req.params.dogId, { liked: req.body.liked },
    function(err, dog) {
      if (err) {
        res.status(500).send();
      } else {
        res.json(dog);
      }
    });
});

// router.get('/liked', function(req, res, next) {
//   res.render('/');
// });

router.get('/', function(req, res, next) {
 Dog.find({liked: true}, function(err, dogs) {
   if (err) {
     res.status(500).send();
   } else {
      res.json(dogs);
   }
 })
});

module.exports = router;
