let sueldo = {
    suel1:5000,
    suel2:4500,
    suel3:3000,
    suel4:6000,
    em1: "Juan",
    em2: "Victor",
    em3: "Cristina",
    em4: "Mike",
    Ganamas: function () {
        return `Hola, mi nombre es ` + this.em3 + ` y gano ` + this.suel4;
    }
}
console.log(sueldo.Ganamas());