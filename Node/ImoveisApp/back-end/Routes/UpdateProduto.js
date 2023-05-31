const express = require('express')
const Produtos = require('../Models/Produtos')
const Router = express.Router()


Router.post('/update',(req,res)=>{
    const valor = req.body

    Produtos.update(
        {
            nome: valor.titulo,
            tamanho: valor.tamanho,
            valor: valor.preco,
            quartos: valor.quartos,
            garagens: valor.garagens,
            banheiros: valor.banheiros,
            estado: valor.estado
        },
        {where:{id:valor.id}}
    )
 
})

module.exports = Router