var express = require("express");
var app = express();
var server  = app.listen("3000",function() {
	console.log("Server is running");
});

var storage = require("node-persist");
storage.initSync({
	dir: "data",
	ttl: false
});
//storage.setItemSync("danhba",[]);

app.use(express.static('public'));

app.get("/hello",function(req,res){
	res.sendFile( __dirname + "/public/" + "layout.html" );
});
app.get("/them-danh-ba",function(req,res){
	var name = req.query.user_name;
	var tel = req.query.user_tel;
	var danhba = storage.getItemSync("danhba");
	var flag = true;
	for (var i = 0; i < danhba.length; i++) {
		if(name == danhba[i].name){
			danhba[i].tel = tel;
			flag = false;
		}
	}
	if(flag){
		danhba.push({
			name: name,
			tel: tel
		});
	}
	storage.setItemSync("danhba",danhba);
	res.send("done");
});
app.get("/danh-ba",function(req,res){
	var danhba = storage.getItemSync("danhba");
	var db = {
		status: 1,
	    message: "Success!",
	    data: danhba
	}
	res.send(db);
});
app.get("/danh-ba/chi-tiet",function(req,res){
	//var ID = req.query.id;
	var db = {
		status: 1,
		    message: "Success!",
		    data: 
		    	{
		    		name: "le van A",
    				tel: "028292929"
	    	 	}
	}
	res.send(db);
});

