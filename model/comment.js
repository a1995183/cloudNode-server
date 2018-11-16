const mongoose = require('mongoose')
const Schema = mongoose.Schema
const comments=new mongoose.Schema({
    auid:{
        type:String
        // type:Schema.Types.ObjectId,
        // ref:'article'
    },
    content:{
        type:String,
        required:true},
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    replayName:String
},{varsionKey:false,timestamps:{createdAt:'createdTime',updatedAt:'updatedTime'}})
module.exports=mongoose.model('comments',comments);