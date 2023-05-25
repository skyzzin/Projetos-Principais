const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./Controller/conn');
const Multer = require('multer');
const session = require('express-session')
const fs = require('fs');
const path = require('path');




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

const bodyParser = require('body-parser');
const Usuarios = require('./Models/Usuarios');
const Produtos = require('./Models/Produtos');
app.use('/Imagens',express.static(path.join(__dirname, "Imagens")))
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret:'abc',
    resave:false,
    saveUninitialized:true,
}))

app.get('/', (req, res) => {});

app.get('/produtos', (req, res) => {
    Produtos.findAll({
        raw: true
    }).then((data) => {
        res.send(data);
    });
});

app.post('/addproduto', Upload.single('foto'), async (req, res) => {
    const nome = req.body.titulo;
    const quartos = req.body.quartos;
    const banheiros = req.body.banheiros;
    const garagens = req.body.garagens;
    const tamanho = req.body.tamanho;
    const valor = req.body.valor;
    const estado = req.body.estado;

    try {
       Produtos.create({
            nome: nome,
            quartos: quartos,
            valor: valor,
            banheiros: banheiros,
            garagens: garagens,
            tamanho: tamanho,
            estado: estado
        }).then((data)=>{
          
           const newFileName = `${data.id}.png`;
           const oldFilePath = path.join('./Imagens', req.file.filename);
           const newFilePath = path.join('./Imagens', newFileName);
           fs.renameSync(oldFilePath, newFilePath);

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

app.listen(5000);
