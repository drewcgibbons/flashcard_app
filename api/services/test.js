var mysql = require('mysql');

function run_query(sql, callback){

  var con = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: ""
  });

  return con.connect(function(err) {
    if (err) 
      throw err;

    else {
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) { 
          throw err; 
        } else {
          return callback(result[0]);
        }
       });
    }
  });
}

module.exports = {run_query};