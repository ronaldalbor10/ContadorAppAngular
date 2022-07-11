import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  nuevo:Personaje ={
    nombre:"Maestro Roshi",
    poder:100
  }

  //Injeccion de dependencias si inicializa el sevicio DbzService al inicializar la clase MainPageComponent
  constructor(private dbzService: DbzService){}
  
}
