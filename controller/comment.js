const {Router}=require("express")
const router=Router()
const Comment=require('../model/comment')
router.post('/addComment',async (req,res,next)=>{
    const {auid,content,user,replayName}=req.body;
    if(user){
        try{
            if(content!=null){
                const data=Comment.create({auid,content,user,replayName})
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
const {pn=1,size=10,auid=""}=req.query
let total='';
Comment.find().count().then(data=>{
    total=data
})
Comment.find({auid})
.skip((pn-1)*size)
.limit(size)
.sort({_id:1})
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
        total,
        data
    })
})
})
module.exports=router