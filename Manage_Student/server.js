var express = require("express");
var app = express();
app.use(express.static('public'));
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
   	var sinhvien = collection.collection("sinhvien");
   	// var lophoc1 = {
   	// 	ma_lop: 't1808m1',
   	// 	ten_lop: 'T1808M1',
   	// 	phong_hoc: '208'
   	// };
   	// var lophoc2 = {
   	// 	ma_lop: 't1808a1',
   	// 	ten_lop: 'T1808A1',
   	// 	phong_hoc: 'A10'
   	// };
   	
   	// lophoc.insert([lophoc1,lophoc2],function(err,result){
   	// 	if(err){
   	// 		console.log("khong thanh cong");
   	// 	}else{
   	// 		console.log("them lop thanh cong");
   	// 	}
   	// });
   	

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

	app.get("/list_class",function(req,res){
		lophoc.find().toArray(function (err, result) {
	 		if(err){
	 			res.send({
	 				status: 0,
	 				message: 'Fail'
	 			});
	 		}else{
	 			//console.log(result);
	 			res.send({
	 				status: 1,
	 				message: 'Success',
	 				data: result
	 			});
	 		}
  		});
	});  
	app.get("/delete-class",function(req,res){
		var id =  req.query.id;
		lophoc.deleteMany({_id:mongodb.ObjectId(id)}, 
		function(err, obj) {
	    if (err){
	    	res.send("Fail");
	    }else{
	    	res.send("Success");
	    }
	    
	  });
	});
	app.get("/chi-tiet-lop-hoc",function(req,res){
		var id =  req.query.id;
		lophoc.find({_id:mongodb.ObjectId(id)}).toArray(function (err, result) {
			if(err || result.length <1){
	 			res.send({
	 				status: 0,
	 				message: 'Fail'
	 			});
	 		}else{
	 			var data = result[0];
 				res.send({
	 				status: 1,
	 				message: 'Success',
	 				data: data
	 			});
	 		}
		});
	});
 }
});




