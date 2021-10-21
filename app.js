var express=require('express');
var app=express()
var fs=require("fs");
app.route('').get(function(req,res){
            fs.readFile(__dirname+"/"+"home.html",'utf8',function(err,data){
            if (err) throw err;
            console.log(data);
            res.end(data);
    });
});
app.route('/ahmd').get(function(req,res){
    res.send("Hello Ahmedabad");
});
app.route('/jaipur').get(function(req,res){
    res.send("Hello Jaipur");
});
app.route('/mumbai').get(function(req,res){
    res.send("Hello Mumbai");
});
var server=app.listen(8088,function(){
var host=server.address().address
var port =server.address().port
console.log("Example app listening at http://%s:%s",host,port)
})