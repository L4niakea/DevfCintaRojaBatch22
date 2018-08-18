const express = require('express');
const bodyParser = require ('body-parser');

const {
    Alumno,
    Programa
} = require('./client');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('Estoy funcionando, si sirvo :D');
});
//Crear un nuevo Programa
app.post('/api/v1/programa/', (req, res)=>{
    const{descripcion, duracion}= req.body;
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    });

    nuevoPrograma.save((req, pr) => {
        res.status(201).send(pr)
    });
});
//Crear un nuevo alumno
app.post('/api/v1/alumno/', (req, res) =>{
    const{nombre, apellidos, edad, programa}=req.body
    let nuevoAlumno=Alumno({
        nombre,
        apellidos,
        edad,
        programa
    });

    nuevoAlumno.save((err, alumno)=>{
        res.status(201).send(alumno);
    });
});
//Obtener lista de alumnos 
app.get('/api/v1/alumno', (req, res)=>{
    Alumno.find({},(err, alumnos)=>{
        Programa.populate(alumnos,{path:'programa'},(err, result)=>{
            res.status(200).send(result) 
        });
    });
});
//Obtener alumno por ID
app.get('/api/v1/alumno/:uid', (req, res)=>{
    let {uid}=req.params;
    Alumno.findById(uid).exec()
        .then(alumno => 
            Programa.populate(alumno,{path:'programa'},(err, result)=>{
                res.status(200).send(result);
            }))
        .catch(error => res.send(error));
});
//Borrar Usuario
app.delete('/api/v1/alumno/:uid', (req, res)=>{
    let {uid} = req.params;
    Alumno.findByIdAndRemove(uid).exec()
        .then(alumno => res.status(204).send(alumno))
        .catch(error=>res.send(error))
});
//Editar Usuario
app.put('/api/v1/alumno/:uid', (req, res)=>{
    let {uid} = req.params;
    Alumno.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec()
        .then(alumno=>res.send(alumno))
        .catch(error=>res.send(error));

});

app.listen(8000, function () {
    console.log('¡API corriendo en puerto 8000!');
  });