/* const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!')) 

const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


*/

const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('¡Hola Bienvenido a la API de ExoGrid!');
});

app.get('/usuarios/', (req, res) => {
  res.send('¡Hola Bienvenido a la pagina de usuarios!')
});

app.post('/usuarios/', (req, res) => {
  //console.log(req.body);
  let nuevoUsuario = req.body;
  console.log(nuevoUsuario)

  res
    .status(201)
    .send(nuevoUsuario)
    
});

/* app.put('/usuarios/:uid', (request, response)=>{
  console.log(request.params);
  response.status(200).send("Usuario Actualizado Correctamente")
}); */

app.put('/usuarios/:param1/:param2/otrapagina/:param3/', (request, response)=>{
  console.log(request.params);
  console.log(request.query);
  response.status(200).send("Usuario Actualizado Correctamente")
});

app.delete('/usuarios/:id/', (req, res)=> {
/*   res
    .status(204)
    .send(req.params); */
res.status(204).send(req.params);

console.log('¡Usuario Borrado Exitosamente!')
});


app.listen(3000, function () {
  console.log('¡API corriendo en puerto 3000!');
});
