let request = require("request");


let URLBASE = "https://goodreads-devf-aaron.herokuapp.com"

let CrearUsuario = new Promise ((resolve, reject) =>{

    let uribase = "/api/v1/authors/";
    let URL = URLBASE + uribase;
    let jsonSend = {
        "name": "Laniakea.",
        "last_name": "GL.",
        "nacionalidad": "MX",
        "biography": "Just here at 127.0.0.1",
        "gender": "M",
        "age": 30
    }

    request.post({url:URL,formData: jsonSend},(error, response, body) => {
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(JSON.parse(body))

    });
});

CrearUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));

/* 
    let URLBASE = "https://goodreads-devf-aaron.herokuapp.com"

let LeerUsuario = new Promise ((resolve, reject) =>{

    let uribase = "/api/v1/authors/1066/";
    let URL = URLBASE + uribase;
    let jsonSend = {
        "id": "1066"
    }

    request.get({url:URL},(error, response, body) => {
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(JSON.parse(body))
    });
});

LeerUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */


/*     let URLBASE = "https://goodreads-devf-aaron.herokuapp.com"

    let EdicionParcialUsuario = new Promise ((resolve, reject) =>{
    
        let uribase = "/api/v1/authors/1066/";
        let URL = URLBASE + uribase;
        let jsonSend = {
            "age": 50
        }
    
        request.patch({url:URL,formData: jsonSend},(error, response, body) => {
            response.statusCode == 201
            ? resolve(JSON.parse(body))
            : reject(JSON.parse(body))
        });
    });
    
    EdicionParcialUsuario
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error)); */


/* let URLBASE = "https://goodreads-devf-aaron.herokuapp.com"

let EditarUsuario = new Promise ((resolve, reject) =>{

    let uribase = "/api/v1/authors/1059/";
    let URL = URLBASE + uribase;
    let jsonSend = {
        "name": "Cristina",
        "last_name": "ZA",
        "nacionalidad": "MX",
        "biography": "Just here at 127.0.0.1",
        "gender": "M",
        "age": 31
    }

    request.put({url:URL, formData: jsonSend},(error, response, body) => {
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(JSON.parse(body))

    });
});

EditarUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */


/*     let URLBASE = "https://goodreads-devf-aaron.herokuapp.com"

let BorrarUsuario = new Promise ((resolve, reject) =>{

    let uribase = "/api/v1/authors/1184/";
    let URL = URLBASE + uribase;
    //let jsonSend = {}

    request.delete({url:URL},(error, response, body) => {
        response.statusCode == 204
        ? resolve(JSON.parse(body))
        : reject(JSON.parse(body))

    });
});

BorrarUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */