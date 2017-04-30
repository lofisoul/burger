var orm = require('../config/orm.js');

var burger = {
  show: function(cb) {
    orm.selectAll('burgers', cb, function(res){
      cb(res);
    });
  },
  eat: function(cb) {
    orm.updateOne('burgers','devoured','id', cb, fuction(res){
      cb(res);
    });
  },
  add: function(val, cb) {
    orm.insertOne('burgers','burger_name',val, cb, function(res){
      cb(res);
    });
  }
};

modules.export = burger;
