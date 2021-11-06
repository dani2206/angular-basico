import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModulo } from './Heroes/heroes.modulo';
import { ContadorModulo } from './contador/contador.modulo';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
