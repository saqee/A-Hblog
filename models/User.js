const {model,schema, Schema}=require('mongoose')

const userSchema=new Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},{timestamps:true})

module.exports=model("user",userSchema)