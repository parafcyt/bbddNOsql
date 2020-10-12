import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/servicios/ticket.service';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {

  ticketsDisponibles:any;

  constructor(private ticketServicio: TicketService) { }

  ngOnInit(): void {
    this.listarDisponibles();

  }

  listarDisponibles(){
    this.ticketServicio.listarDisponibles().subscribe(res=>{
      this.ticketsDisponibles=res;
      console.log(res);
      
    });
  }

  reservar(nroTicket:Number){
    this.ticketServicio.reservar(nroTicket).subscribe(res=>{
      console.log(res);
      alert(res);
      this.listarDisponibles()
      
    });
  }

  

}
