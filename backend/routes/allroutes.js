const express= require('express')

const userController= require('../controllers/user')

const fullRoute= express()


fullRoute.post('/user',userController.registeruser)


module.exports= fullRoute