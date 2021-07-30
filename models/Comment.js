const {Schema,model}=require('mongoose')
const commentSchema=new Schema({
    postId:{
        type:Schema.Types.ObjectID,
        ref:'posts'
    },
    comment:{
        type:String
    },
    UserName:{
        type:String
    },
},{timestamps:true})

module.exports=model('comment',commentSchema)