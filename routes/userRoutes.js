const app=require('express')
const {register,registerValidation,login,loginValidation}=require('../controllers/userController')

const router=app.Router()
router.post('/register',registerValidation,register)
router.post('/login',loginValidation,login)
module.exports=router