var express = require('express');
var app = express();
var http = require('http').Server(app);
var https=require('https');
var bodyParser = require('body-parser');
var path = require('path');
var PORT=process.env.PORT || 8081;
var morgan=require('morgan');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var count=0;
var tokens=[];
var driversId=[];
//Listeners
http.listen(PORT, function(){
  console.log(`Connected...  Run On Port:${PORT}`);
});
app.get('/',(req,res)=>
{    
	return res.send("Running");
});
app.get('/test_login',(req,res)=>
{
 
  var pass="pass";var driveridn='driveridn';
  var reqUrl='https://airlink.moovex.net/driver2.asp?action=login';
  var users=[302795679];
  var passarray=[12345];
  var promises = [];
  for(var i = 0; i < users.length; i++) 
  {
     var url=reqUrl+"&"+pass+"="+passarray[i]+"&"+driveridn+"="+users[i];
     request(url);
  }
});
function request(url)
{
  var data="";
  https.get(url,(res)=>
  {
   res.on('data', (d) => {
     data+=d;
   });
   res.on('end',()=>{
      count++;
      try
      {
        var json=JSON.parse(data);
        tokens.push(json.token);
        driversId.push(json.driverid);
        console.log(json);
      }
      catch(e)
      {
        console.log(e);
        count--;
      }
      console.log(count);
   })
   
  }).on('error',(e)=>{
     console.error(e);
  });  
  
}



