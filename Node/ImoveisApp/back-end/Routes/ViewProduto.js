const express = require('express');
const Produtos = require('../Models/Produtos');
const Router = express.Router()

Router.get('/produtos', (req, res) => {
    Produtos.findAll({
        raw: true,
        order:[['id','DESC']]

    }
    ).then((data) => {
        res.send(data);
    });
});

module.exports = Router