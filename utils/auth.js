const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    const token=authHeader.split('Bearer ')[1];
    try {
        jwt.verify(token,process.env.SECRET)
        next()
    } catch (error) {
        return res.status(400).json({errors:[{msg:error.message}]})
       
    }
}