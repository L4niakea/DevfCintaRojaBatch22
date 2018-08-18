/* let triple = function(numero){
    return numero * 3;

    let variable = triple
    let final = variable

} */


//Funciones de orden superior 
//funciones callback

/* let funcionDeOrdenSuperior = function(callback){
    console.log("Hola soy la funcion de orden superior");
    callback();
}

let fuciocallback = function(){
    console.log("HOla soy la funcion callback");

}

funcionDeOrdenSuperior(fuciocallback); */

/* let ordenSuperior = function(saludar){
    console.log("Hola soy una funcion de orden superior");
    saludar();

}

ordenSuperior(function(){
        console.log("HOla a todos");
    }
); */

/* 
let saluda = (mensaje, formato) => {
    formato(mensaje);
}

let minusculas = (mensaje) => {
    console.log(mensaje.toLowerCase())
}

let mayusculas = (mensaje) => {
    console.log(mensaje.toUpperCase())
}

saluda("Hola soy Hugo, soy una funcion de orden superior", minusculas);
saluda("Hola soy Hugo, soy una funcion de orden superior", mayusculas);

 */


//FILTER
/* 
let animales = [
    {Nombre: "Heladio",   especie: "Tortuga" },
    {Nombre: "Jose",      especie: "tigre"},
    {Nombre: "Hugo",      especie: "cuyo"},
    {Nombre: "Fabiola",   especie: "Tortuga" },
    {Nombre: "Mauricio",  especie: "tigre"},
    {Nombre: "Jorge",     especie: "cuyo"},
    {Nombre: "Cristina",  especie: "Tortuga" },
    {Nombre: "Rogelio",   especie: "tigre"}
]

let cuyos = [];

for (let i=0; i<animales.length; i++){
    if (animales [i].especie == "cuyo"){
        cuyos.push(animales[i]);
    }
}

console.log(cuyos) 

cuyos = animales.filter(animal =>{
    return animal.especie == "cuyo";
});

console.log(cuyos); */


//Map

/* let animales = [
    {Nombre: "Heladio",   especie: "Tortuga" },
    {Nombre: "Jose",      especie: "tigre"},
    {Nombre: "Hugo",      especie: "cuyo"},
    {Nombre: "Fabiola",   especie: "Tortuga" },
    {Nombre: "Mauricio",  especie: "tigre"},
    {Nombre: "Jorge",     especie: "cuyo"},
    {Nombre: "Cristina",  especie: "Tortuga" },
    {Nombre: "Rogelio",   especie: "tigre"}
]

let Tigres = [];

/* for  (let i=0; i<animales.length; i++){
    if (animales[i].especie == "tigre"){
        Tigres.push(animales[i].Nombre)
    }
} 

Tigres = animales.map(function(animal){
    return animal.Nombre;
});

console.log(Tigres)


 */








