const Depoimentos = require('../Models/Depoimentos')

const Router = require('express').Router()

Router.get('/depoimentos',(req,res)=>{
    const valores = Depoimentos.findAll({raw:true}).then((e)=>{
        res.send(e)
    })
    
})



module.exports = Router