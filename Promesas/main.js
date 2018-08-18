const request  = require ("request");

/* let Promesa = new Promise(function(resolve, reject){
        resolve("Esta promesa se resolvió");
        reject("Esta promesa no se resolvió");
});
Promesa.then(function(respuesta){console.log(respuesta)});
//Promesa.catch();
 */

/* console.log("Se van a imprimir algo...")
setTimeout(function(){console.log("Pasaron 1 segundos")},1000);
setTimeout(function(){console.log("Pasaron 2 segundos")},2000);
setTimeout(function(){console.log("Pasaron 3 segundos")},3000); */


/* console.log("Se van a imprimir algo...")
let UnaPromesa = new Promise((resolve, reject)=>{

    setTimeout ( ()=> {
        resolve("Se resolvio la promesa!");
    }, 10000);
    
});

console.log(UnaPromesa)

console.log("Procesando")

UnaPromesa.then(mensaje => console.log(mensaje)); */


/* let promesa = new Promise ((resolve, reject) =>{

    let numero = 8
    if (numero%2 == 0){
        resolve("Si es Par");
    } else reject("No es Par");
});

promesa
    .then(mensaje => console.log(mensaje))
    .catch(mensjae => console.log(mensjae)); */


let promesaswapi = new Promise ((resolve, reject) => {


    request("https://swapi.co/api/planets/13/", (error, response , body)=>{

       // let planeta = (JSON.parse(body))

        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(error);

        /* console.log(planeta.name)
        console.log(planeta.climate) */
     });

});

promesaswapi
    //.then(json => console.log(json));
    .then(Planeta => console.log(`El nombre del planeta: ${Planeta.name} \nEl clima del planeta es: ${Planeta.climate}`));


    /*     request("https://swapi.co/api/planets/13/", (error, response, body)=>{

            response.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject(error);
    }) */


