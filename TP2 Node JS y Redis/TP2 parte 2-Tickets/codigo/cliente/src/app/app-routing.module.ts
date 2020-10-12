import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTO COMPONENTES
import { DisponiblesComponent } from "./componentes/disponibles/disponibles.component";
import { ReservadosComponent } from "./componentes/reservados/reservados.component";
import { CompradosComponent } from "./componentes/comprados/comprados.component";

const routes: Routes = [
  {path:'', redirectTo:'disponibles',pathMatch:'full'},
  {path:'disponibles', component:DisponiblesComponent},
  {path:'reservados', component:ReservadosComponent},
  {path:'comprados', component:CompradosComponent},
  {path:'**', component:DisponiblesComponent}
]; //** para cualquier ruta no definida */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
