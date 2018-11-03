var path= require("path");
var express = require('express')
var router = express.Router()
const user=require('../controller/user')
const article=require('../controller/article')
const comment=require('../controller/comment')
const category=require('../controller/category')
router.use(user)
router.use(comment)
router.use(article)
router.use(category)
router.use('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
module.exports = router;
