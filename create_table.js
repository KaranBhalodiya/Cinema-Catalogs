var mysql= require('mysql');
var con= mysql.createConnection({
host:"localhost",
user:"root",
password:"11110000",
database:"movies",
port:"3321"
});
con.connect(function(err){
if(err) throw err;
console.log("Connected!") ;
var sql="create table movie (movie_name varchar(255), director_name varchar(255),hero_name varchar(255),heroin_name varchar(255), city_name varchar(255))";
con.query(sql,function(err,result){
if (err) throw err;
console.log("Table created");
});
});