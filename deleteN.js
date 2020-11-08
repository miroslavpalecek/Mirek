
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function deleteN(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CRM");
        dbo.collection("contacts").deleteOne(req.body , function(err, ano) {
          if (err) throw err;
          //console.log(req.body)

          res.json(ano);
          db.close();
        });
    });
  
    }
    
    module.exports = deleteN;