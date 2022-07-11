import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

   private _personajes: Personaje[] =[
        {
          nombre:"Goku",
          poder:16000
        },
        {
          nombre:"Vegueta",
          poder: 10000
        }
      ];

    get personajes():Personaje[]{
        //la forma [...] rompe la referencia de javaScript y hace seguro el acceso la variable
        return [...this._personajes];
    }

    constructor(){
        console.log('Servicio inicializado');
    }

    agregarPersonaje(infoPersonaje:Personaje){
        this._personajes.push(infoPersonaje);
    }
}