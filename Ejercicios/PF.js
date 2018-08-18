/* 
1. Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.

        Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
        Salida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”]

*/

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

let saludos = (mensaje, formato) => {
    formato (mensaje);
}

let minmay = (mensaje) => {
    console.log(mensaje.toUpperCase() + mensaje.toLowerCase())
}

saludos("Hola Amigos, cinta roja CDMX y GDL, yei", minmay)
