class cajero {
    constructor(Titular, cantidad) {
      this.Titular = Titular
      this.cantidad = cantidad
    }
    Ingresar() {
        if (this.cantidad > 900){
            } else return "No se puede"
      return (this.cantidad + 1000);
    }

    Retirar(){
    if (this.cantidad <=10){
      return "No tiene dinero";
    } else return "Despachando";
    }
  }
  
  let CuentaPersonal = new cajero ("Hugo",5);

    console.log(CuentaPersonal.Ingresar());
    console.log(CuentaPersonal.Retirar());
 
  