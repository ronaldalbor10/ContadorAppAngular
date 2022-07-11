import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  //personajes: Personaje[] = [];

  nuevo:Personaje ={
    nombre:"Maestro Roshi",
    poder:100
  }

  /*get personajes():Personaje[]{
    return this.dbzService.personajes;
  }*/


  /*agregarNuevoPersonaje(infoPersonaje:Personaje){
    this.personajes.push(infoPersonaje);
  }*/
  //Injeccion de dependencias si inicializa el sevicio DbzService al inicializar la clase MainPageComponent
  constructor(private dbzService: DbzService){
    
    //this.personajes = this.dbzService.personajes;
  }
  
  //Funciones para cambiar datos del formulario de forma directa
  /*cambiarNombre(event:any){
    console.log(event.target.value);
  }

  cambiarPoder(event:any){
    console.log(event.target.value);
  }*/

}
