var connection = require('./connection.js');

var orm = {
  selectAll: function(db_table, cb) {
    //db_table => burgers
    var queryString = 'SELECT * FROM ' + db_table;
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function(db_table, db_col, val, cb) {
    //db_table => burgers
    //db_col => burger_name
    //val => INPUT FROM user
    var queryString = 'INSERT INTO ' + db_table (db_col) + 'VALUES ('+ val +')';
    connection.query(queryString, [req.body.db_col], function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    }
  },
  updateOne: function(db_table, db_col, id, cb) {
    //db_table => burgers
    //db_col => devoured
    //id => id
    var queryString = 'UPDATE ' + db_table + 'SET ' + db_col + '=1 WHERE id =?';
    connection.query(queryString,[id], function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    })
  }
};

module.exports = orm;
