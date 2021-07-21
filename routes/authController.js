const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
// const {secret} = require('../config')
const mysql = require('mysql2')
const db = require('../db')


const sql = `SELECT password FROM project.users WHERE login=?`


// const generateAccessToken = (id, roles) => {
//     const payload = {
//         id,
//         roles
//     }
//     return jwt.sign(payload, secret,{expiresIn: "24h"})
// }

class authController {
    async login(req, res) {
        console.log("Аутентификация..")
        try {
            const login = req.body.login
            const password = req.body.password
            db.query(sql, login, function(err, results){
                if(err){
                    return res.status(400).json({message: 'Пользователь не найден'})
                }
                if(results[0].password!=password){
                    return res.status(400).json({message: 'Введен неверный пароль'})
                }
                res.render('user', {login})
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Login error'})
        }
    }
}

// db.end(function(err){
//     if(err){
//         return console.log("Error")
//     }
//     console.log("Connection close")
// })

// class authController {
//     async login(req, res) {
//         try {
//             const {login, password} = req.body
//             const user = await User.findOne({login}) //пытаемся найти пользователя по имени в бд
//             if(!user) {
//                 return res.status(400).json({message: 'Пользователь не найден'})
//             }
//             const validPassword = bcrypt.compareSync(password, user.password) //сравниваем хэш-пароли
//             if(!validPassword) {
//                 return res.status(400).json({message: 'Введен неверный пароль'})
//             }
//             const token = generateAccessToken(user.id, user.roles)
//             return res.json({token})
//         } catch (error) {
//             console.log(error)
//             res.status(400).json({message: 'Login error'})
//         }
//     }
//     // async getUsers(req, res) {
//     //     try {
//     //         const users = await User.find()
//     //         res.json(users)
//     //     } catch (error) {
            
//     //     }
//     // }
// }

module.exports = new authController()