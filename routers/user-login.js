const express=require('express')
const router= express.Router()
const userlogins=require('../models/user-logins')

//for getting one user
router.get('/',async(req,res)=>{
   try{
        const userlogin=await userlogins.find()
        res.json(userlogin)
   }catch(err){
        res.send('Error' +err)
   }
})


//for getting all users
router.get('/:id',async(req,res)=>{
    try{
         const userlogi=await userlogins.findById(req.params.id)
         res.json(userlogi)
    }catch(err){
         res.send('Error' +err)
    }
 })


//for creating data to database
router.post('/',async(req,res)=>{
   const userlog=new userlogins({
       username:req.body.username,
       password:req.body.password
   }) 
   try{
       const ul=await userlog.save() 
       res.json(ul)
   }catch(err){
      res.send('Error')
   }
})

module.exports=router