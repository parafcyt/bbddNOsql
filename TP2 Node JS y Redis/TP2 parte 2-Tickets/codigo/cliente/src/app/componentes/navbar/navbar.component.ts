import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from "../../servicios/ticket.service";
import { DisponiblesComponent } from '../disponibles/disponibles.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numeroDeInput: String; 

  constructor(private ticketServicio:TicketService, private route:Router) { }

  ngOnInit(): void {
    
  }

  iniciarTickets(){
    //console.log(this.numeroDeInput);
    
    this.ticketServicio.iniciar(this.numeroDeInput).subscribe(res=>{
      //console.log(res);

      //para resetear la pagina
      window.location.reload();

      //this.route.navigate(['/disponibles']);
      
    });

  }

}
