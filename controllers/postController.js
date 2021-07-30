const formidable = require('formidable');
const { v4:uuidv4 } = require('uuid');
const {body,validationResult}=require("express-validator")
const { htmlToText } = require('html-to-text');
const fs=require('fs')
const Post=require('../models/Post')
const CommentSchema=require('../models/Comment')
module.exports.postCreate=(req,res)=>{
   const form=formidable({multiples:true})
   form.parse(req, async(err, fields, files) => {
     const {title,body,slug,description,name,id}=fields
     const errors=[]
     if(title==''){
       errors.push({
         msg:'title is required'
       })
     }
     if(body==''){
      errors.push({
        msg:'body is required'
      })
    }
    if(slug==''){
      errors.push({
        msg:'slug is required'
      })
    }
    if(description==''){
      errors.push({
        msg:'description is required'
      })
    }
    if(Object.keys(files).length === 0){
      errors.push({
        msg:'image is required'
      })
    } else{
      const{type}=files.image
      const split=type.split('/')
      const extention=split[1].toLowerCase()
      if(extention !=='jpg' && extention !=='jpeg' && extention !=='png'){
        errors.push({
          msg:'extention is not required'
        })
      }else{
        files.image.name=uuidv4()+'.'+extention;
        
      }
    }
    const checkSlug=await Post.findOne({slug})
    if(checkSlug){
      errors.push({msg:'choose unique slug' })
    }
    if(errors.length !==0){
      return res.status(400).json({errors,files})
    }else{
      const newPath=__dirname+`/../client/build/images/${files.image.name}` 
      fs.copyFile(files.image.path,newPath,async(error)=>{
        if(!error){
         try {
          const response=await Post.create({
            title,
            description,
            body,
            slug,
            userName:name,
            userId:id,
            image:files.image.name
          })
         return res.status(200).json({msg:'your post successfully creted',response})
         } catch (error) {
          return res.status(500).json({errors:error,msg:error.message})
         }
        }
      })
     
    }
    /* 
     return res.json({files})
     console.log(files); */
    /* res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ fields, files }, null, 2)); */
  });
}

module.exports.fetchPosts=async(req,res)=>{
  const id=req.params.id;
  const page=req.params.page
  const perPage=1;
  const skip=(page-1)*perPage;
  try{
    const count=await Post.find({userId:id}).countDocuments();
    const response=await Post.find({userId:id}).skip(skip).limit(perPage).sort({_id: -1})
  return res.status(200).json({response:response,count,perPage})//send or khetre data nam na lhekleo chole but recieve o must data lheka lagbo
    
  }catch(error){
    return res.status(400).json({errors:[{msg:error.message}]})//error oe khetre response dewa lagbo
   //console.log(error);
  }
 
}

module.exports.fetchPost=async (req,res)=>{
   const id=req.params.id
   try {
     const post=await Post.findOne({_id:id})
     return res.status(200).json({post})
   } catch (error) {
     return res.status(400).json({errors:error.message})
   }
}

module.exports.updateValidation=[
  body('title').notEmpty().trim().withMessage('title is required'),
  body('body').notEmpty().trim().custom(value=>{
      let bodyValue=value.replace(/\n/g,"")
      if(htmlToText(bodyValue).trim().length===0){
        return false
      }else{
        return true;
      }
    }).withMessage('body is required'),
  body('description').notEmpty().trim().withMessage('description is required')
]

module.exports.updatePost=async (req,res)=>{
  const {title,description,body,id}=req.body;
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(404).json({errors:errors.array()})
  }else {
    try {
      const updatePost=await Post.findByIdAndUpdate(id,{
        title,
        body,description
      })
      return res.status(200).json({msg:"your post updated",updatePost})
    } catch (error) {
      return res.status(400).json({errors:error})
    }
    

  }
  

}

module.exports.updateImage=(req,res)=>{
  const form=formidable({multiples:true})
  form.parse(req,(err,fields,files)=>{
   const errors=[];
   const {id}=fields
   if(Object.keys(files).length===0){
     errors.push({msg:'choose image'})
   }else{
     const {type}=files.image

     const sp=type.split('/')
     const ex=sp[1].toLowerCase()

     if(ex!=='jpg' && ex!=='jpeg' && ex!=='png'){
      errors.push({msg:'image should be png or jpg or jpeg'})
     }else{
       files.image.name=uuidv4()+'.'+ex;
     }
   }

   if(errors.length !==0){
     return res.status(400).json({errors:errors})
   }else{
    const newPath=__dirname+`/../client/build/images/${files.image.name}` 
    fs.copyFile(files.image.path,newPath,async(error)=>{
      if(!error){
        try {
          const response=await Post.findByIdAndUpdate(id,{image:files.image.name})
          return res.status(200).json({msg:'your image updated'})
        } catch (error) {
          return res.status(400).json({errors:error.message})
        }
      }
    })
   }
  })
}

module.exports.DeletePost=async(req,res)=>{
   const id=req.params.id

   const response=await Post.findByIdAndRemove(id)
   return res.status(200).json({msg:'your post deleted'})
}

module.exports.home=async(req,res)=>{
  const page=req.params.page
  const perPage=2;
  const skip=(page-1)* perPage;
 try {
  const count=await Post.find().countDocuments();
  const posts=await Post.find().skip(skip).limit(perPage)
  return res.status(200).json({response:posts,count,perPage})
 } catch (error) {
  return res.status(400).json({errors:error,msg:error.message})
 }
}

module.exports.Details=async(req,res)=>{
  const id=req.params.id;
  try {
    const post=await Post.findOne({_id:id})
    const commentdata=await CommentSchema.find({postId:post._id})
    return res.status(200).json({post,commentdata})
  } catch (error) {
    return res.status(400).json({error})
  }
}

module.exports.Comment=async(req,res)=>{
  const {id,userName,comment}=req.body
  try {
    const commentData=await CommentSchema.create({
      postId:id,
      comment,
      UserName:userName
    })
    return res.status(200).json({msg:'comment success'})
  } catch (error) {
    return res.status(400).json({error})
  }
}