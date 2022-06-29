import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador app';

  public numero: number =0;

  sumar (): void {
    this.numero +=1;
  }
  
  restar (): void {
    this.numero -=1;
  }

  acumulador(valor:number): void {
      this.numero += valor;
  }
}
