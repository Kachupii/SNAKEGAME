export class Serpiente {
  constructor() {
    this.cuerpo = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    this.direccion = { x: 1, y: 0 };
  }

  avanzar() {
    const cabeza = this.cuerpo[0];
    const nuevaCabeza = { x: cabeza.x + this.direccion.x, y: cabeza.y + this.direccion.y };
    this.cuerpo.unshift(nuevaCabeza);
    this.cuerpo.pop();
  }



CambiarDireccion(nuevaDireccion){

}

getCabeza(){

}

colisionBorde(){

}

colisionConsigo(){

}

comer(){
    
}

reiniciar(){
    
}

}