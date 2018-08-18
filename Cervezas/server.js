const express = require('express');
const bodyParser = require ('body-parser');

const {
    ALE,
    LAGER,
    cerveza,
    SRM
} = require('./cliente');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('Estoy funcionando, a beber:D PROST');
});

app.post('/api/v1/cerveza/ale', (req, res)=>{
    const{StyleName, Nombre, abv, styleALE, SRM}= req.body;
    let nuevaCerveza = cerveza({
        StyleName,
        Nombre,
        abv,
        styleALE,
        SRM
    });

    nuevaCerveza.save((err, cer) => {
        res.status(201).send(cer)
    });
});


app.post('/api/v1/cerveza/lager', (req, res)=>{
    const{StyleName, Nombre, abv, styleLAGER, SRM}= req.body;
    let nuevaCerveza = cerveza({
        StyleName,
        Nombre,
        abv,
        styleLAGER,
        SRM
    });

    nuevaCerveza.save((err, cer) => {
        res.status(201).send(cer)
    });
});

app.post('/api/v1/ale/', (req, res) =>{
    const{StyleFam}=req.body
    let nuevoEstiloALE=ALE({
        StyleFam
    });

    nuevoEstiloALE.save((err, ale)=>{
        res.status(201).send(ale);
    });
});

app.post('/api/v1/lager/', (req, res) =>{
    const{StyleFam}=req.body
    let nuevoEstiloLAGER=LAGER({
        StyleFam
    });

    nuevoEstiloLAGER.save((err, lag)=>{
        res.status(201).send(lag);
    });
});


app.post('/api/v1/SRM/', (req, res) =>{
    const{SRMColor, SRMNum}=req.body
    let nuevoSRM = SRM({
        SRMColor,
        SRMNum
    });

    nuevoSRM.save((err, sr)=>{
        res.status(201).send(sr);
    });
});

app.get('/api/v1/cervezas/', (req, res)=>{
    cerveza.find({},(err, cerveza)=>{
        ALE.populate(cerveza,{path:'styleALE'},(err, result)=>{
            res.status(200).send(result) 
/*      LAGER.populate(cerveza,{path:'styleLAGER'},(err, result)=>{
                res.status(200).send(result) 
        SRM.populate(cerveza,{path:'SRM'},(err, result)=>{
                res.status(200).send(result) 
                });
            }); */
        });
    });
});

app.get('/api/v1/cervezas/lager', (req, res)=>{
    cerveza.find({},(err, cerveza)=>{
        LAGER.populate(cerveza,{path:'styleLAGER'},(err, result)=>{
            res.status(200).send(result) 
        });
    });
});

app.get('/api/v1/cervezas/SRM', (req, res)=>{
    cerveza.find({},(err, cerveza)=>{
        SRM.populate(cerveza,{path:'SRM'},(err, result)=>{
            res.status(200).send(result) 
        });
    });
});


app.listen(5000, function () {
    console.log('¡API corriendo en puerto 5000!');
  });