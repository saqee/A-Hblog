const express=require('express')
const connect=require('./config/db')
const bodyparser=require('body-parser')
const router=require('./routes/userRoutes')
const routerPost=require('./routes/postRoutes')
const profile=require('./routes/profileRoutes')
const path=require('path')
require('dotenv').config()
const app=express()
connect();

app.use(bodyparser.json())
app.use('/',router);
app.use('/',routerPost);
app.use('/',profile);

app.listen(process.env.PORT || 5000,()=>{
  console.log('server start'+process.env.PORT);
})
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,"/client/build/")))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}