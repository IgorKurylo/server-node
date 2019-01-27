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
app.listen("/",(res,req)=>{
		
	return res.send("Running");
});



