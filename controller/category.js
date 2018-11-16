const {Router}=require("express")
const router=Router()
const categoryModel=require('../model/category')
router.get('/category',(rq,res)=>{
    let total='';
    categoryModel.find().count().then(data=>{
        total=data;
    })
    categoryModel.find().then(data=>{
        res.json({
            code:200,
            total,
            data
        })
    })
})
router.get('/category/:id',(req,res)=>{
    let {id}=req.params
    categoryModel.findById(id).then(
        data=>{
            res.json({
                code:200,
                data
            })
        }
    )
})
router.post('/category',async (req,res)=>{
    const {name}=req.body
   const data= await categoryModel.create({name})
    res.json({
        code:200,
        msg:'分类创建成功！',
        data
    })
})
module.exports=router