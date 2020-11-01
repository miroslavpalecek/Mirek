var MongoClient = require('mongodb').MongoClient;
MongoClient.connect ('mongodb://127.0.0.1:27017', function(err,db){
    if (err){

        throw err;
    }else{

        console.log("Conected");
    }

    db.close();
}); 