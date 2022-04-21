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
    productName: [{
        type: String
    }],
    productQuantity: [{
        type: String
    }],
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('order', OrderProduct)