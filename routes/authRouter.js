const Router =require("express")
const controller = require('./authController')
const {check} = require('express-validator')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')

const router = new Router()

const urlencodedParser = bodyParser.urlencoded({extended:false});

router.use(express.static('public')) //статические данные

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../src/login.html'), function(error, data){
        if(error){
            res.status(404).send('Not Found')
        }
        else{
            res.end(data)
        }
    })
})

router.post('/login', urlencodedParser, controller.login)
// router.post('/login', urlencodedParser, function(req,res){
//     console.log(req.body)
//     res.send("Вы вошли")
// }) 
// router.get('/users', controller.getUsers)  //для установки доступов


module.exports = router