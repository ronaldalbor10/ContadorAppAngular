import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  nuevo:Personaje = {
    nombre:'Truncks',
    poder:0
  }
  agregar(){
    
    console.log(this.nuevo);
  }

  //Funciones para cambiar datos del formulario de forma directa
  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }

  cambiarPoder(event:any){
    console.log(event.target.value);
  }*/

}
