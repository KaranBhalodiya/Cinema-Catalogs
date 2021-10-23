var mysql= require('mysql');
var con= mysql.createConnection({host:"localhost",
user:"root",
password:"11110000",
database:"movies",
port:"3321"

});
con.connect(function(err){
if(err) throw err;
console.log("Connected!");
var sql="Insert into movie values ?";
var values=[
['XXX','Rob Cohen','Vin Diesel','Asia Argento','Ahmedabad'],
['FF-7','James Wan','Paul Walker','Nathalie Emmanuel','Jaipur'],
['MI-5','Christopher McQuarrie','Tom Cruise','Rebecca Ferguson','Mumbai'],
['Escape Plan','Mikael Håfström','Sylvester Stallone','Amy Ryan','Ahmedabad'],
['Death Race','Paul W. S. Anderson','Jason Statham','Natalie Martinez','Ahmedabad'],
['MIB','Rob Cohen','Vin Diesel','Asia Argento','Jaipur'],
['The Jungle Book','Rob Cohen','Vin Diesel','Asia Argento','Ahmedabad'],
['Avengers','Joe Russo','Iron Man','Scarlett Johansson','Mumbai'],
['Bahubali','S. S. Rajamouli','Prabhas','Tamanna Bhatia','Ahmedabad']

]
con.query(sql,[values],function(err,result){
if (err) throw err;
console.log("Inserted all data");
});
});