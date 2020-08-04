//these are all like import
const express= require('express');
const mongoose=require('mongoose');
var cors=require('cors');
const Joi=require('joi');
var path=require('path');

//this is for creating database
const url= 'mongodb://localhost/LoginDB'

const app=express();

//for connecting db
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected.......')
})

//for getting data as json form 
app.use(express.json())

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

//if any route came like /user-login it will route into ./routers/user-login
const loginUserRouter= require('./routers/user-login')
app.use('/user-login',loginUserRouter)

//for specifying port
const port =process.env.PORT || 9000;
app.listen(port,()=> console.log(`Listening on port ${port}.....`));