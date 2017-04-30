var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//selectAll
router.get('/', function(req,res) {
  burger.show(function(data) {
    console.log(data);
    res.render('index',{burgers: data});
  });
});

//updateOne
router.put('/:id', function(req,res){
  var condition = "id = " + req.params.id;
  console.log("condition: " + condition);
  burger.eat(function(data) {
    console.log(data);
    res.redirect('/');
  })
});

//add
router.post('/', function(req,res){
  burger.add(function(data) {
    console.log(data);
    res.redirect('/');
  })
});

module.exports = router;
