//Abstraccion, encapsulamiento, polimorfismo herecnia 

//Clases

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso =peso;
      this.altura = altura;
    }
    IMC() {
      return (this.peso / (this.altura*this.altura));
    }

    MayorDeEdad(){
    if (this.edad <18){
      return "Es menor de edad";
    } else return "Es mayor de edad";
    }

    calculoRFC(){
      this.rfc = this.nombre + this.edad + this.sexo;
    }
  }
  
  let HUGO = new Persona ("Hugo",30, "H", 90, 1.70 )

    console.log(HUGO.IMC().toFixed(2));
    console.log(HUGO.MayorDeEdad());
    console.log(HUGO.rfc);
    console.log(HUGO.calculoRFC());
    console.log(HUGO.rfc);
  