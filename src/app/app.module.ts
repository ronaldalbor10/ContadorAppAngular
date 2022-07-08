import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesMudule } from './heroes/heroes.mudule';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesMudule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
