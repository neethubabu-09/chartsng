const mongoose=require('mongoose')


//this is the table structure
const userLoginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('userlogins',userLoginSchema)