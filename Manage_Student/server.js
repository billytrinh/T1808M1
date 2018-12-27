var express = require("express");
var app = express();

app.listen("3003",function(){
	console.log("server is running");
});

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://root:root123@ds042698.mlab.com:42698/data';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error');
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connected');

    // do some work here with the database.
    
    //Close connection
   	// db.close();
  }
});




