const express = require('express');
const router = express.Router();
//import {}from ..... // Cannot use import statement outside a module
const {home,Comment,postCreate,fetchPosts,fetchPost,updatePost,updateValidation,updateImage,DeletePost,Details} =require ('../controllers/postController')
const auth=require('../utils/auth')
router.get('/posts/:id/:page',auth,fetchPosts)
router.post('/create',auth,postCreate)
router.post('/update',[auth,updateValidation],updatePost)
router.post('/updateImage',auth,updateImage)
router.get('/post/:id',auth,fetchPost)
router.get('/delete/:id',auth,DeletePost)
router.get('/home/:page',home)
router.get('/explore/:id',Details)
router.post('/comment',auth,Comment)
module.exports =router;