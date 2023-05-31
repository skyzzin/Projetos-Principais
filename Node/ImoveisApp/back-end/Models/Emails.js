const { STRING } = require('sequelize')
const conn = require('../Controller/conn')


const Email = conn.define('emails',{
    email:{type:STRING}
})
 
conn.sync({force:false})    

module.exports = Email