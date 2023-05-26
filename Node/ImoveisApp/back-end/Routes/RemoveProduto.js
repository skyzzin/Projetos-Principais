const express = require('express')
const Router = express.Router()
const Produtos = require('../Models/Produtos')
const fs = require('fs')


Router.post('/remove',(req,res)=>{
    const id = req.body.id
   
    Produtos.destroy({
        where:{id:id}
    })
   
})


module.exports = Router