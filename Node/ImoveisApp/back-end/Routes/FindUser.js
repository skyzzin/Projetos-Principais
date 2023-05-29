const express = require('express')
const Usuarios = require('../Models/Usuarios')
const Router = express.Router()
const session = require('express-session')

express().use(
    session({
        secret:'12121',
        resave:false,
        saveUninitialized:true
    })
)
 

Router.post('/finduser',(req,res)=>{
    const nome = req.body.nome
    const senha = req.body.senha

    Usuarios.findOne({where:{nome:nome,senha:senha},raw:true})
    .then((e)=>{
        try{
            const user = e.nome
            res.send(user)
         
        }
        catch{res.send('false')}
    })
})


Router.post('/users',async(req,res)=>{
    const nome = req.body.nome
    const senha = req.body.senha
    const valores = await Usuarios.findAll()

    
    if(await Usuarios.findOne({where:{nome:nome,senha:senha},raw:true})){
        res.send(valores)
    }


})





module.exports = Router