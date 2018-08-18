/* 1 Carpeta nueva para el proyecto
2 Entrar a la Carpeta
3 npm init -> package.JSON
4 npm install request --save 
5 const request = require("request");
6 request.get = require("request")

 */

const request = require ("request");

/* request("http://pokeapi.co/api/v2/pokemon/151/",(error, response, body)=>{
    let respuesta = (JSON.parse(body))
    console.log(respuesta.name);
    if (response.statusCode == 200){
        request('https://pokeapi.co/api/v2/type/14/',(error,response,body)=>{
            let respuesta = (JSON.parse(body))
            console.log(respuesta.name);
        }
    );
    }
}
);


 request("http://pokeapi.co/api/v2/pokemon/151/", (error, response , body)=>{
    let respuesta = (JSON.parse(body))
    console.log(respuesta.name)
    console.log(respuesta.types[0].type.name)
 });
 

 request("http://openlibrary.org/search.json?q=i+robot", (error, response , body)=>{
    let respuesta = JSON.parse(body)
    respuesta = respuesta.docs
    for  (let i=0; i<respuesta.length; i++){
        console.log(respuesta[i].author_name);
        }
    });
    
request("http://openlibrary.org/search.json?author=asimov", (error, response , body)=>{
    let respuesta = JSON.parse(body)
    respuesta = respuesta.docs
    for  (let i=0; i<respuesta.length; i++){
    if (respuesta[i].author_name == "Isaac Asimov");
    console.log(respuesta[i].title_suggest);
}
});


request("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i", (error, response , body)=>{
    let respuesta = JSON.parse(body)
    respuesta = respuesta.near_earth_objects
    respuesta = Object.keys(2018-04-16)
    for  (let i=0; i<respuesta.length; i++){
    if (respuesta[i].is_potentially_hazardous_asteroid == "true");
    console.log(respuesta[i].name);
}
});
 */

request("http://pokeapi.co/api/v2/pokemon?limit=151",(error, response, body) =>{
    if (response.statusCode == 200){
        let arreglopokemon = JSON.parse(body).results;
        arreglopokemon.map(pokemon =>{
            request.get(pokemon.url, (error, response, body)=> {
                let miPokemon = JSON.parse(body);
                console.log(miPokemon)
            })
        })
    }
});