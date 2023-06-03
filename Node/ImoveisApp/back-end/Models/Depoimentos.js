const { STRING } = require('sequelize')
const conn = require('../Controller/conn')


const Depoimentos = conn.define('depoimentos',{
    msg:{type:STRING},
    nome:{type:STRING},
    avatar:{type:STRING}
})
 
conn.sync({force:false})      

module.exports = Depoimentos 