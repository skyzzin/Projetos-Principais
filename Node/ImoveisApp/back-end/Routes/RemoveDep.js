
const Router = require('express').Router()

const Depoimentos = require('../Models/Depoimentos')

Router.post("/removedep",async(req,res)=>{
    const id = req.body.id
    await Depoimentos.destroy({where:{id:id}})
})

module.exports = Router