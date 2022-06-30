import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','IronMan','Thor','Hulk'];
  heroesBorrados:string[] = [];
  borrarHeroe():void{
    let cantidaHeroes: number = this.heroes.length;
    let posicion = Math.floor(Math.random() * cantidaHeroes);
    let heroeBorrado = this.heroes[posicion];
    this.heroesBorrados.push(heroeBorrado);
    this.heroes.splice(posicion, 1);

    
  }
}
