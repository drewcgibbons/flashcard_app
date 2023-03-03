var query = require('../services/test.js');

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    sql = "SELECT word FROM english.five_letter_words limit 1;"
    query.run_query(sql, function(result){
        res.send(JSON.stringify(result));  
    });
    
}) 

module.exports = router;