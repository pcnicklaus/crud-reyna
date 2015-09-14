var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get All Llamas
router.get('/llamas', function(req, res, next) {
  Llama.find({}, function (error, data) {
    if (error) {
      res.json(error);
    }
    else {
      res.json(data);
    }
  });
});


// Post a llama
router.post('/llamas', function (req, res, next) {
  var newLlama = new Llama ({
    name: req.body.name,
    age: req.body.age,
    spitter: req.body.spitter
  });
    newLlama.save(function (error, llama) {
      if (error) {
        res.json({'message': error});
      }
      else {
        res.json(llama);
      }
    });

});

// Get ONE llama
router.get('/llama/:id', function (req, res, next) {
  Llama.findById(req.params.id, function (error, llama) {
    if (error) {
      res.json({"message": error});
    }
    else {
      res.json(llama);
    }
  });
});

// edit one llama
router.put('/llama/:id', function (req, res, next) {
  // var update = req.body;
  var options = {new: true};
  Llama.findByIdAndUpdate(req.params.id, req.body, options, function (error, llama) {
    if (error) {
      res.json({'message': error});
    }
    else {
      res.json(llama);
    }
  });
});

// delete one llama
router.delete('/llama/:id', function (req, res, next) {
  Llama.findByIdAndRemove(req.params.id, function (error, llama) {
    if (error) {
      res.json({'message': error});
    }
    else  {
      res.json(llama);
    }
  });
});



module.exports = router;
