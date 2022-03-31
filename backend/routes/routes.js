const express = require('express')
const {request, response} = require("express");
const  router = express.Router()
const signUpTemplateCopy = require('../models/User')

router.post('/signup',async (request,response) =>{
    const user = await new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    user.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.get('/signin')
module.exports=router