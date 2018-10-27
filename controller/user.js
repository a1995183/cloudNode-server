const {Router}=require("express")
const router=Router()
const userModel=require('../model/user')
router.post('/user',async (req,res,next)=>{
    try{
        const {username,password,email}=req.body
        const avatarNumber=Math.ceil(Math.random()*8)
        const avatar=`http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
        if(password&&password.length>=5){
        const data=await userModel.create({username,password,email,avatar}) 
            res.json({
                code:200,
                msg:'注册成功'
            })
        }  
            else{
                throw '密码长度不符合要求'
            }
      
     
    }catch(err){
        res.json({
            code:400,
            msg:'缺少必要参数,或邮箱已经被注册',
            err
        })
    }})
    router.post('/login',async (req,res)=>{
      try{
        const {email,password}=req.body
        const userData=await userModel.findOne({email})
        if(!userData){
            res.json({
                code:400,
                msg:'用户不存在'
            })
        }else{
            if(password&&password==userData.password){
                userData.password="偷看密码是小狗"
                req.session.user=userData
                res.json({
                    code:200,
                    msg:'登录成功',
                    data:userData
                })
            }else{
                res.json({
                    code:200,
                    msg:'密码不正确'
                })
            }
        }
      }catch(err){
        res.json({
            code:400,
            msg:err
        })
      }
    })
    router.get('/layout',(req,res)=>{
        if(req.session.user){
            req.session.user=null
            res.json({
                code:200,
                msg:'退出登录成功'
            })
        }else{
            res.json({
                code:403,
                msg:'不能在未登录状态下，退出登录'
            })
        }
    })
    module.exports=router