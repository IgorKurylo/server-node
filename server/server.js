const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require("sequelize");
const logger = require('morgan')
const app = express();
const port = process.env.PORT || 8082

app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res)=>{
  res.status(404)
})

const http = require('http').Server(app)

const dbConfig = require("./config/config.json").development;
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
  console.log("Listening on port" + port)
  app.emit('APP_START')
})
module.exports=app



