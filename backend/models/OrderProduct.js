const mongoose = require('mongoose')

const OrderProduct = new mongoose.Schema({

    orderId: {
        type:String,
        required:true
    },
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
    products : [{
        type: String
    }],
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('user', OrderProduct)