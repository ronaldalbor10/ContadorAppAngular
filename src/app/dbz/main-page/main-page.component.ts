import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



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

  nuevo:Personaje ={
    nombre:"Maestro Roshi",
    poder:100
  }


  agregarNuevoPersonaje(infoPersonaje:Personaje){
    this.personajes.push(infoPersonaje);
  }
  
  //Funciones para cambiar datos del formulario de forma directa
  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }

  cambiarPoder(event:any){
    console.log(event.target.value);
  }*/

}
