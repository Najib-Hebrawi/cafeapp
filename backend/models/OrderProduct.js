const mongoose = require('mongoose')

const OrderProduct = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    userComment:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('user', OrderProduct)