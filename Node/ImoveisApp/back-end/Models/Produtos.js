const { INTEGER, STRING } = require('sequelize')
const conn = require('../Controller/conn')


const Produtos = conn.define('produtos',{
    nome:{type:STRING},
    img:{type:STRING},
    quartos:{type:INTEGER},
    banheiros:{type:INTEGER},
    garagens:{type:INTEGER},
    tamanho:{type:INTEGER},
    estado:{type:STRING},
    valor:{type:INTEGER}
})
 
conn.sync({force:false})       

module.exports = Produtos