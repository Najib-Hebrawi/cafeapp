const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderProduct = new Schema(
    {
        orderId: {
            type:String,
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

module.exports = mongoose.model('order', OrderProduct)