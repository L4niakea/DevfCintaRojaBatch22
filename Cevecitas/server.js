const express = require('express');
const bodyParser = require ('body-parser');

const {
    Estilo,
    Cerveza
} = require('./cliente');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('Estoy funcionando, a beber:D PROST');
});

app.listen (7000, ()=> console.log('Servidor de chelas corriendo en puerto 7000'));