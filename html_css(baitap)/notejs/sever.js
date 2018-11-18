var express = require ("express");
var app = express();
app.use(express.static('public'));

var sever = app.listen("3001", function() {
	console.log("Server is runing");
});