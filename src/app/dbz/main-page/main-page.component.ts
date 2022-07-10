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

  personajes: Personaje[] =[
    {
      nombre:"Goku",
      poder:16000
    },
    {
      nombre:"Vegueta",
      poder: 10000
    }
  ];

  nuevo:Personaje = {
    nombre:'',
    poder:0
  }
  agregar(){
       
    if(this.nuevo.nombre.trim().length === 0){return;}
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    this.nuevo ={
      nombre:'',
      poder:0
    }
  }

  //Funciones para cambiar datos del formulario de forma directa
  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }

  cambiarPoder(event:any){
    console.log(event.target.value);
  }*/

}
