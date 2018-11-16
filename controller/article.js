const {Router} =require("express")
const router=Router()
const articleModel=require('../model/article')
const categoryModel=require('../model/category')
router.post('/article',async(req,res,next)=>{
    try{
        if(req.session.user){
            const{content,contentText,title,category}=req.body
            const data = await articleModel.create({
                title,
                content,
                contentText,
                category,
                author:req.session.user._id}
             )
             res.json({
                 code:200,
                 msg:'笔记发布成功!',
                 data:data
             })
            }else{
                res.json({
                    code:403,
                    msg:"未登录状态不能发表"
                })
            }
    }catch(err){
next(err)
    }

})
router.get('/article',(req,res)=>{
    let{pn=1,size=10,author}=req.query
    let  total='';
    console.log(author)
    pn=parseInt(pn)
    size=parseInt(size)
    articleModel.find().count().then(data=>{
     total=data
})
    articleModel.find()
    .skip((pn-1)*size)
    .limit(size)
    .sort({_id:-1})
    .populate({
        path:'author',
        select:'-password -email'
    })
    .populate({
        path:'category',
    })
    .then(data=>{
        res.json({
            code:200,
            data,
            total
        })
    })
})
router.get('/article/:id',(req,res)=>{
    const{id}=req.params
    articleModel.findById(id)
    .populate({
        path:'author',
        select:'-password -email'
    })
    .populate({
        path:'category'
    })
    .then(data=>{
        res.json({
            code:200,
            data
        })
    })
})
module.exports=router