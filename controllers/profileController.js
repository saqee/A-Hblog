const User=require('../models/User')
const jwt=require('jsonwebtoken')
require('dotenv').config()
module.exports.updateName=async(req,res)=>{
  const {name,id}=req.body;
  //console.log(name,id);
  if(name===''){
      return res.status(400).json({errors:[{msg:'name required'}]})
  }else{
      try {
          const user=await User.findOneAndUpdate({
              _id:id,
              
          },{name:name},{new:true})
          const token=jwt.sign({user},process.env.SECRET,{
              expiresIn:'7d'
          })
          return res.status(200).json({token,msg:'name updated'})
      } catch (error) {
        return res.status(400).json({error})
      }
  }
}