var express = require("express");
var app = express();
var server  = app.listen("3000",function() {
	console.log("Server is running");
});


app.use(express.static('public'));

app.get("/hello",function(req,res){
	res.sendFile( __dirname + "/public/" + "layout.html" );
});
app.get("/danh-ba",function(req,res){
	var db = {
		status: 1,
	    message: "Success!",
	    data: [
	    	{
	    		name: "le van A",
	    		tel: "028292929"
	    	},
	    	{
	    		name: "le van B",
	    		tel: "0988888"
	    	},
	    ]
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

