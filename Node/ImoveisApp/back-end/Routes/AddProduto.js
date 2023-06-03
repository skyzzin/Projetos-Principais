const express = require('express')
const Router = express.Router()

const fs = require('fs');
const path = require('path');


const Multer = require('multer');
const Produtos = require('../Models/Produtos');

const Storage = Multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Imagens');
    },
    filename: (req, file, cb) => {
        const dist = String(req.session.identy) + '.png';
        cb(null, dist);
    }
});


const Upload = Multer({ storage: Storage });






Router.post('/addproduto', Upload.single('foto'), async (req, res) => {
    const nome = req.body.titulo.toLocaleLowerCase()
    const quartos = req.body.quartos
    const banheiros = req.body.banheiros
    const garagens = req.body.garagens
    const tamanho = req.body.tamanho
    const valor = req.body.valor
    const estado = req.body.estado
    const desc = req.body.desc
    const local = req.body.local
 
 
    try {
       Produtos.create({
            nome: nome,
            quartos: quartos,
            valor: valor,
            banheiros: banheiros,
            garagens: garagens,
            tamanho: tamanho,
            estado: estado,
            desc:desc,
            local:local,
        }).then((data)=>{
          
           try{
            const newFileName = `${data.id}.png`;
            const oldFilePath = path.join('./Imagens', req.file.filename);
            const newFilePath = path.join('./Imagens', newFileName);
            fs.renameSync(oldFilePath, newFilePath);
           }catch{console.log('erro')}

           Produtos.update({ img: `http://127.0.0.1:5000/Imagens/${data.id}.png` }, { where: { id: data.id } }).then(() => {
            return data.save();
          })

        })

        res.status(200).json({ message: 'Produto cadastrado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o produto.' });
    }
});


module.exports = Router