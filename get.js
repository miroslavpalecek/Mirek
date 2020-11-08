var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function get(req, res) {

  //console.log({message: "1"})
  MongoClient.connect(url, function(err, db) {

    //console.log({message: "2"})

    if (err) throw err;
    var dbo = db.db("CRM");
    dbo.collection("contacts").find().toArray( function(err, result) {
      res.json(result);
      if (err) throw err;
      db.close();
    });
  });
  //console.log({message: "3"})
  
  }
  
  module.exports = get;
