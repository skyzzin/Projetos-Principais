const Router = require('express').Router();
const Depoimentos = require('../Models/Depoimentos');
const path = require('path');
const fs = require('fs')

const Multer = require('multer');

const Storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Avatar');
  },
  filename: (req, file, cb) => {
    const dist = String(req.session.identy) + '.png';
    cb(null, dist);
  },
});

const Upload = Multer({ storage: Storage });

Router.post('/depoimentos', Upload.single('avatar'), (req, res) => {
  const msg = req.body.msg;
  const nome = req.body.nome;

  try {
    Depoimentos.create({
      msg: msg,
      nome:nome
    }).then((data) => {
      try {
        const newFileName = `${data.id}.png`;
        const oldFilePath = path.join('./Avatar', req.file.filename);
        const newFilePath = path.join('./Avatar', newFileName);
        fs.renameSync(oldFilePath, newFilePath);
      } catch (error) {
        console.log('erro', error);
      }

      Depoimentos.update(
        { avatar: `http://127.0.0.1:5000/Avatar/${data.id}.png` },
        { where: { id: data.id } }
      ).then(() => {
        return data.save();
      });
    });

    res.status(200).json({ message: 'Produto cadastrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o produto.' });
  }
});

module.exports = Router;
