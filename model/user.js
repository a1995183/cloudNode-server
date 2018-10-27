const mongoose =require('mongoose')
const user=new mongoose.Schema({
    avatar:String,
    username:String,
    email:{
        type:String,
        unique:true,//唯一
        required:true //必须有
    },
    password:String,
    desc:String
},{versionKey:false,timestamps:{createdAt:'create-time',updatedAt:'update-time'}})//??
module.exports=mongoose.model('user',user)