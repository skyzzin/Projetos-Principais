const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./Controller/conn');

const session = require('express-session')
const fs = require('fs');
const path = require('path');
const port = 5000
const bodyParser = require('body-parser');



app.use('/Imagens',express.static(path.join(__dirname, "Imagens")))
app.use(cors({ origin: 'http://localhost:5174' }));
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

app.use(AddProduto)
app.use(RemoveProduto)
app.use(ViewProduto)
app.use(UpdateProduto)



app.get('/', (req, res) => {});





app.listen(port);
