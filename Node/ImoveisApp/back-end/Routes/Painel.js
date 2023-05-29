const express = require('express')
const Usuarios = require('../Models/Usuarios')
const Router = express.Router()

Router.get('/painel',(req,res)=>{
    res.render('painel')
})

Router.post('/painel',(req,res)=>{
    const nome = req.body.nome
    const senha = req.body.senha

    Usuarios.findAll({
        where:{nome:nome,senha:senha}
    }).then(()=>{
        res.render('cadastro.ejs')
    })
})

Router.get('/painel/cadastro/adm',(req,res)=>{
    
})

module.exports = Router