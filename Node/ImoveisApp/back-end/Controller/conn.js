const {Sequelize} = require('sequelize')

const conn = new Sequelize({
    dialect:'sqlite',
    storage:'./Controller/banco.sqlite'
})

conn.sync({force:false}) 

module.exports = conn