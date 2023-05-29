const express = require('express')
const Router = express.Router()
const Produtos = require('../Models/Produtos')
const fs = require('fs')


Router.get('/painel/remover',(req,res)=>{
    res.render('remover.ejs')
})



Router.post('/remove',(req,res)=>{
    const id = req.body.id
   
    Produtos.destroy({
        where:{id:id}
    })
   
})


module.exports = Router