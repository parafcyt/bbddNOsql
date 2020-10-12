import { Component, OnInit } from '@angular/core';
import { TicketService } from "../../servicios/ticket.service";

@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.component.html',
  styleUrls: ['./reservados.component.css']
})
export class ReservadosComponent implements OnInit {

  ticketsReservados:any;

  ticketAComprar:Number;

  constructor(private ticketServicio: TicketService) { }

  ngOnInit(): void {
    this.listarReservados()
  }


  listarReservados(){
    this.ticketServicio.listarReservados().subscribe(res=>{
      this.ticketsReservados=res;
      console.log(res);
      
    });
  }

  comprar(nroTicket:Number){
    this.ticketServicio.comprar(nroTicket).subscribe(res=>{
      console.log(res);
      this.listarReservados()
      
    });
  }

}
