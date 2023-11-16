const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fullRoute= require('./routes/allroutes')

const app= express()

app.use(cors({
    origin:['http://localhost:4200']
}))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('',fullRoute)

app.listen(4000,()=>{
    console.log('server started successfully');
})
