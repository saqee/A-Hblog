require('dotenv').config()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User=require('../models/User')

const createToken=(user)=>{
   return jwt.sign({ user}, process.env.SECRET,{
    expiresIn:'7d',
});
}


module.exports.registerValidation=[
    body('name').not().isEmpty().trim().withMessage('name field is requird'),
    body('email').not().isEmpty().trim().withMessage('email field is requird'),
    body('password').isLength({ min: 3 }).withMessage('password field is requird and grater than 3'),
]
module.exports.register=async (req,res)=>{
    const {name,email,password}=req.body;
    const saltRounds = 10;
    const salt =await bcrypt.genSalt(saltRounds);
   const hash =await bcrypt.hash(req.body.password, salt);   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }try {
         const checkUser=await User.findOne({email})
      if(checkUser){
        return res.status(400).json({ errors: [{msg:"email already taken"}]});
      }try {
        
         const user=await User.create({
             name,email,
             password:hash
         })
         var token = createToken(user);
         return res.status(200).json({msg:"your account created",token});
      } catch (error) {
        return res.status(500).json({ errors:error });
      }
    }catch(error){
        return res.status(500).json({ errors:error });
    }
}


module.exports.loginValidation=[
    body('email').not().isEmpty().trim().withMessage('email field is requird'),
    body('password').not().isEmpty().trim().withMessage('password field is requird'),
]
module.exports.login=async (req,res)=>{
 const {email,password}=req.body
 const errors=validationResult(req)
 if(!errors.isEmpty()){
    return   res.status(400).json({errors:errors.array()})
 }try {
     const user=await User.findOne({email})
     if(!user){
       return res.status(401).json({errors:[{msg:"user not found"}]})
     }else{
       const matched= await bcrypt.compare(password, user.password)
       if(matched){
           var token=createToken(user)
           return res.status(200).json({msg:"login successfully",token})
       }else{
        return res.status(400).json({errors:[{msg:"password not matched"}]})
       }
     }
     
 } catch (error) {
    return res.status(500).json({errors:error})
 }
}