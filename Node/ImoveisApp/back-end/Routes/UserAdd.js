const express = require('express')
const Usuarios = require('../Models/Usuarios')
const Router = express.Router()








Router.post('/useradd',(req,res)=>{
    const nome = req.body.nome
    const senha = req.body.senha

    Usuarios.create({
        nome:nome,
        senha:senha
    })
})












module.exports = Router