const { INTEGER, STRING } = require('sequelize')
const conn = require('../Controller/conn')



const Usuarios = conn.define('usuarios',{
    nome:{type:STRING},
    email:{type:STRING},
    senha:{type:STRING},
    avatar:{type:STRING}
})
 
conn.sync({force:false})   

module.exports = Usuarios