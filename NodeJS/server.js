var express = require("express");
var app=express();
var storage=require("node-persist");
storage.initSync({
	dir: "data",
	ttl: false
});
storage.setItemSync("domain", "wwttffff");
app.use(express.static('public'));
app.get("/hello", function (req,res) {
	var data = {
    status: 1,
    message: "Success!",
    data: [
        {
        	name: "abc",
        	num: "09876543456789"
        },
        {
        	name: "ertyeye",
        	num: "346346"
        },
        {
        	name: "sgs",
        	num: "3586732"
        }

    ]
};
	res.send(data);
});

var server = app.listen(3141, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log(host);

})