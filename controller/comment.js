const {Router}=require("express")
const router=Router()
const Comment=require('../model/comment')
router.post('/addComment',async (req,res,next)=>{
    const {article,content,user}=req.body;
    if(user){
        try{
            if(content!=null){
                const data=Comment.create({article,content,user})
                res.json({
                    code:"200",
                    msg:'评论发表成功'
                })
            }else{
                res.json({
                    code:201,
                    msg:'缺少评论内容'
                })
            }
           
        }catch(err){
            res.json({
                code:401,
                msg:'评论失败'
            })
        }
    }else{
        res.json({
            code:'201',
            msg:'未登录状态，请先登录',
            data:''
        })
    }

})
router.get('/getComment',(req,res,next)=>{
const {page=1,pageSize=110}=req.query
Comment.find()
.populate({
    path:'user',
    select:'-password -email'
})
// .populate({
//     path:'article',
//     select:'-content -contentText'
// })
.then(data=>{
    res.json({
        code:200,
        msg:'success',
        data
    })
})
})
module.exports=router