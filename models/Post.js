const {model,Schema}=require('mongoose')

const postSchema=new Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
    slug:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    userName:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
},{timestamps:true})


module.exports=model("post",postSchema)