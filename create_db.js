var mysql= require('mysql');
var con= mysql.createConnection({
//connectionLimit: 10,
host:"localhost",
user:"root",
password:"11110000",
port:"3321"
});
con.connect(function(err){
if(err) throw err;
console.log("Connected!") ;
con.query("create database movies",function(err,result){
if (err) throw err;
console.log("Database created");
});
});