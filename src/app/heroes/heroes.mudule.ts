import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    imports:[
        //El CommonModule sirve para que funcionalidades como el *ngFor y *ngIf puedan funcionar
        CommonModule 
    ]
})
export class HeroesMudule{}