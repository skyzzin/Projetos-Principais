const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./Controller/conn');

const ejs = require('ejs')

const session = require('express-session')
const fs = require('fs');
const path = require('path');
const port = 5000
const bodyParser = require('body-parser');

app.use('/Imagens',express.static(path.join(__dirname, "Imagens")))
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(session({
    secret:'abc',
    resave:false,
    saveUninitialized:true,
}))
app.use(bodyParser.json());

const Usuarios = require('./Models/Usuarios');
const Produtos = require('./Models/Produtos');

const AddProduto = require('./Routes/AddProduto')
const RemoveProduto = require('./Routes/RemoveProduto')
const ViewProduto = require('./Routes/ViewProduto')
const UpdateProduto = require('./Routes/UpdateProduto')
const Painel = require('./Routes/Painel')
const UserAdd = require('./Routes/UserAdd')
const FindUser = require('./Routes/FindUser')

app.use(AddProduto)
app.use(RemoveProduto)
app.use(ViewProduto)
app.use(UpdateProduto)
app.use(UserAdd)
app.use(FindUser)

app.set('view engine','ejs')
app.use(Painel)





app.get('/', (req, res) => {});





app.listen(port);
