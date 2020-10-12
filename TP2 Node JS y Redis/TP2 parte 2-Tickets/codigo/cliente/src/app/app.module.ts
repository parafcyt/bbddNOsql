import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DisponiblesComponent } from './componentes/disponibles/disponibles.component';
import { ReservadosComponent } from './componentes/reservados/reservados.component';
import { CompradosComponent } from './componentes/comprados/comprados.component';

//importo el servicio
import { HttpClientModule } from "@angular/common/http";
import { TicketService } from "./servicios/ticket.service";


//para ngmodel
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisponiblesComponent,
    ReservadosComponent,
    CompradosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
