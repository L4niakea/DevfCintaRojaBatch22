/* function miFuncion (){
    console.log ("hola");
}

miFuncion();
miFuncion(); 

Funciones sirven para evitar el console.log
*/

/* function NuevaFuncion(nombre){
    console.log("Hola " + nombre)

}

let miNombre = "Hugo"
NuevaFuncion(miNombre);  */

/* function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("hugo") */


//Scope

/* function suma(num1, num2){
    return num1 + num2
}

/* let resultado = suma(5,3);
console.log(resultado);

console.log(suma(1234, 2134)) */

// variable Global
/* let resultado = 0;

function suma(num1, num2){
   resultado =  num1 + num2
    return num1 + num2
}

console.log(resultado);
suma(1234,1324)
console.log(resultado); */

//Funcion anonima 
/* let funcionanonima = function(){
    console.log("Soy una funcion anonima")
}

funcionanonima(); */

//Funciones Flecha
/* let funcionanonima = () => {
    console.log("Soy un arrow Function")
}

funcionanonima(); */

//Funcion return
/* let esMayorDeEdad = (edad) => {
    if (edad >= 18){
        return "Es mayor de edad";
    }else {
        return "No es mayor de edad";
    }
}

console.log (esMayorDeEdad(19)); */

//Objetos 

/* let miobjeto = {};

miobjeto={
    num1: "hola",
    tomado: 213,
    ecs: true
}

console.log(miobjeto.tomado); */

/* let persona = {};

persona={
    Nombre: "Hugo",
    Estatura: 1.67,
    Nacionalidad: "Mexicano",
    presentarse: function(){
        return `Hola, mi nombre es ${this.nombre`});
    }
}
 */