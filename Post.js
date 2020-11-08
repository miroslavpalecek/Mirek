
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function post(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CRM");
        dbo.collection("contacts").insertOne(req.body , function(err, abc,) {
          if (err) throw err;
          //console.log(req.body)
          
          res.json(abc);
          db.close();
        });
    });
  
    }
    
    module.exports = post;