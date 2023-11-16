const express= require('express')

const userController= require('../controllers/user')

const fullRoute= express()


fullRoute.post('/register',userController.registerUser)
fullRoute.post('/login',userController.login)
fullRoute.get('/userfind',userController.userfind)


module.exports= fullRoute