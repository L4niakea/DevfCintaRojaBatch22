class Animal {
    constructor(nombre,peso){
        this.nombre = nombre
        this.peso = peso
        console.log("Se creo Animal");
    }
    getNombre(){
        return  this.nombre
    }
    comer(comida){
        return `Mi animal esta comiendo ${comida}`
    }
   
}
class Perro extends Animal {
    constructor(nombre,peso,raza,color){
        super(nombre,peso)
        this.raza = raza
        this.color = color
        console.log("Se creo un perro")
    }
    ladra(){
        return "Guau guau!!"
    }
}
const pug  = new Perro("Solovino","12kg","Pug","Beige")
/*console.log(
    pug.getNombre()
);
console.log(
    pug.ladra()
) */ 
/*class Pug extends Perro {
    constructor(nombre,peso,raza,color,altura){
        super(nombre,peso,raza,color)
        this.altura = altura
    }
} */
class Largometraje {
    constructor(tiempo){
        this.tiempo = tiempo
    }
    getTiempo(){
        return this.tiempo;
    }
}
class Pelicula extends Largometraje{
    constructor(tiempo,genero){
        super(tiempo)
        this.genero = genero
    }
}
class Documental extends Largometraje{
    constructor(tiempo,director){
        super(tiempo)
        this.director = director
    }
}
class Cine{
    constructor(largometraje){
        this.largometraje = largometraje
    }
    reproducir(){
        return `Reproduciendo ..... ${this.largometraje.getTiempo() }`;
    }
}
/*let  doc = new  Documental("90 min","Pedro Torres")
let peli = new Pelicula("120 min","Accion")
let sala1 = new Cine(doc);
let sala2 = new Cine(peli);
console.log(sala1.reproducir());
console.log(sala2.reproducir()); */
/* class Rectangulo {
    constructor(alto,ancho){
        this.ancho = ancho
        this.alto = alto
    }
    getAncho(){
        return this.ancho;
    }
    getAlto(){
        return this.alto
    }
    setAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }
    setAlto(nuevoAlto){
        this.alto = nuevoAlto
    }
    calcularArea(){
        return this.ancho*this.alto
    }
}
let rect = new Rectangulo(12,45);
console.log(rect.calcularArea())
class Cuadrado extends Rectangulo{
    constructor(lado,lado1){
        super(lado,lado1)
    }
}
 */
class Figura {
    constructor(ladoA,ladoB){
        this.ladoA = ladoA
        this.ladoB = ladoB
    }
     calcularArea(){
        if(this.ladoA == this.ladoB){
            return this.ladoA*this.ladoA
        }else{
            return this.ladoA *this.ladoB
        }
     }
}
class Rectangulo extends Figura{
    constructor(alto,ancho){
        super(alto,ancho)
    }
}
class Cuadrado extends Figura{
    constructor(lado){
        super(lado,lado)
    }
}
let  cuadrado1  = new Cuadrado(12)
let rect = new Rectangulo(15,12)
console.log(
    cuadrado1.calcularArea()
)
console.log(
    rect.calcularArea()
)