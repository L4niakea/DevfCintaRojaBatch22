/* let modulo = require("./Modulo.js");

//console.log(modulo);

let resultado = modulo.restar(45,23);
console.log(resultado) */

// JSON = JavaScript Object Notation 

// API = Application Programing Interface

const request = require ('request');

/* request('https://swapi.co/api/people/10/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */


request('https://swapi.co/api/people/10/', function (error, response, body) {
    if (response.statusCode == 200){
        let respuesta = JSON.parse (body);
        console.log(respuesta);
    } else console.log(response.statusCode, error);

});
