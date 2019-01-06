const express = require('express')
const app = express()
const port = process.env.PORT || 4000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_dbvccwc3:dmf1uks1spnerlpqhcikdvlgv5@ds247944.mlab.com:47944/heroku_dbvccwc3";

const tf = require('@tensorflow/tfjs');

app.get('/', (req, res) => {
    app.get('/', (req, res) => {
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("heroku_njnl7gg8");    

          var myobj = { name: "Company Inc", address: "Highway 37" };
          dbo.collection("customers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
            /*
            var temp = Array(4);
            temp[0] = 0;
            temp[1] = 1;
            temp[2] = 2;
            temp[3] = 3;
            /*
            tf.tensor(temp, [2, 2]).print();
            const verbose = true;
            tf.tensor2d([1, 2, 3, 4], [2, 2]).print(verbose);
            */
        /*
        dbo.Collection('tensor').insertOne(temp, function(err, res)  {                  
            if (err) throw err;
            console.log(temp);
            db.close();
        });
        */
    });
});

app.listen(port, () => {
    console.log("application is listening on:", port);
 });