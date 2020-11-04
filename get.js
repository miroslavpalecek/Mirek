var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function get(req, res) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("CRM");
    dbo.collection("contacts").find().toArray( function(err, result) {
      res.json(result);
      if (err) throw err;
      db.close();
    });
  });

  //res.json({ message: "Ahoj negri"});
  }
  
  module.exports = get;
