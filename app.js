var express=require('express');
var app=express()
var fs=require("fs");

const mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '11110000',
  database: 'movies',
  charset: 'utf8',
  port:'3321'
});


app.route('').get(function(req,res){
            fs.readFile(__dirname+"/"+"home.html",'utf8',function(err,data){
            if (err) throw err;
            res.end(data);
    });
});
/*app.route('/ahmd').get(function(req,res){
    res.redirect('http://localhost:8088/table/Ahmedabad');
});
app.route('/jai').get(function(req,res){
    res.redirect('http://localhost:8088/table/Jaipur');
});
app.route('/mum').get(function(req,res){
    res.redirect('http://localhost:8088/table/Mumbai');
});*/
var reo="<html><head><style>table, th, td { border: 1px solid black;}</style>  </head><body>{${table}}</body></html>";
//sets and returns html table with results from sql select
//Receives sql query and callback function to return the table
function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;

    con.query(sql, (err, res, cols)=>{
      if(err) throw err;

      var table =''; //to store html table

      //create html table with data from res.
      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ res[i].movie_name +'</td><td>'+ res[i].director_name +'</td><td>'+ res[i].hero_name +'</td><td>'+res[i].heroin_name+'</td><td>'+res[i].city_name+'</td></tr>';
      }
      table ='<table border="1"><tr><th>Movie Name</th><th>Director Name</th><th>Actor</th><th>Actress</th><th>City</th></tr>'+ table +'</table>';

      con.destroy(); //Done with mysql connection

      return cb(table);
    });
  });
}


//create the server for browser access
app.get('/:city',function(req,res){  
  var city=req.params.city;
  var sql ="select * from movie where city_name like '"+city+"'";
  setResHtml(sql, resql=>{
    reo = reo.replace('{${table}}', resql);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    res.write(reo, 'utf-8');
    reo="<html><head><style>table, th, td { border: 1px solid black;}</style>  </head><body>{${table}}</body></html>";
  });
});
var server=app.listen(8088,function(){
var host=server.address().address
var port =server.address().port
console.log("Example app listening at http://%s:%s",host,port)
})