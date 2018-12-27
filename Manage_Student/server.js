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

   	// Them 1 lop hoc
   	var collection = db.db();
   	var lophoc = collection.collection("lophoc");
   	var lophoc1 = {
   		ma_lop: 't1808m1',
   		ten_lop: 'T1808M1',
   		phong_hoc: '208'
   	};
   	/*
   	lophoc.insert([lophoc1],function(err,result){
   		if(err){
   			console.log("khong thanh cong");
   		}else{
   			console.log("them lop thanh cong");
   		}
   	});
   	*/

   	// danh sach lop hoc
   	/*
 	lophoc.find({ma_lop: 't1808m1',ten_lop:'T1808M1'})
 		.toArray(function (err, result) {
	 		if(err){
	 			console.log("khong ra du lieu");
	 		}else{
	 			console.log(result);
	 		}
  	});
  	*/
  	// update du lieu
  	/*
  	lophoc.update({ma_lop:'t1808m1'}, {$set: {ten_lop: 'lop hoc nang cao'}}, 
  		function (err, numUpdated) {
	  if (err) {
	    console.log(err);
	  }  else {
	    console.log('cap nhat thanh cong');
	  }
	});
	*/
	// delete 
	/*
	lophoc.deleteMany({ma_lop:'t1808m1',ten_lop:'lop hoc nang cao'}, 
		function(err, obj) {
	    if (err){
	    	console.log('chua xoa dc')
	    }else{
	    	console.log("xoa thanh cong");
	    }
	    
	  });
	  */
 }
});




