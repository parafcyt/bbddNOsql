import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

//SERVICIOS
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./servicios/api.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
