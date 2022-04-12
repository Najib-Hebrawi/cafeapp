const express = require('express')
const {request, response} = require("express");
const  router = express.Router()
const requestOrder = require('../models/OrderProduct')

router.post('/order',async (request,response) =>{
    const requestedOrder = await new requestOrder({
        orderId:request.body.orderId,
        username:request.body.username,
        phoneNumber:request.body.phoneNumber,
        userComment:request.body.userComment
    })
    requestedOrder.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.get('/ordered')
module.exports=router