const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require("sequelize");
const logger = require('morgan')
const app = express();
const dotenv=require('dotenv')
dotenv.config()
const port = process.env.PORT || 8082

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res,next)=>{
  res.status(404)
  next(new Error("Not Found"))
  
})

const http = require('http').Server(app)
const dbConfig={};
if(process.env.NODE_ENV=='development'){
  console.log("Dev Enviroment")
   dbConfig = require("./config/config.json").development;
}else{
   dbConfig = require("./config/config.json").production;
}
const sequelize=new Sequelize(dbConfig.databse,dbConfig.username,dbConfig.password,{
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
sequelize.authenticate().then(()=>{console.log("Connection establish successfully.")})
.catch((error)=>{console.log(error,"Connection faild.")});
http.listen(port,()=>{
  console.log("Listening on port " + port)
  app.emit('APP_START')
})
module.exports=app



