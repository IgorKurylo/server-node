let express = require('express');
let app = express();
let http = require('http');
var bodyParser = require('body-parser');
var PORT=process.env.PORT || 8081;
var morgan=require('morgan');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Listeners
app.listen(PORT, function(){
  console.log(`Connected...  Run On Port:${PORT}`);
});
<<<<<<< HEAD
app.listen("/",(res,req)=>{
		
	return res.send("Running");
});
=======
app.get("/",(req,res)=>{
    return res.send("Runnig");
    
})
>>>>>>> cd867913567df8d40419d4de50da62b7b3625f23



