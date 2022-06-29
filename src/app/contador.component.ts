import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: ` <h1>Hola Mundo</h1>
                <h2>{{ titulo }}</h2>
                <h3>Número base: <strong>{{ base }}</strong></h3>
                <button (click)="acumulador(base);">+{{ base }}</button>
                <span>{{ numero }}</span>
                <button (click)="acumulador((base*-1));">-{{ base }}</button>`
})
export class ContadorComponent {
    public titulo:string = 'Contador app';

  public numero: number =0;

  public base :number = 5;


  acumulador(valor:number): void {
      this.numero += valor;
  }
}