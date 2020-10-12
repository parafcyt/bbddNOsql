import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/servicios/ticket.service';

@Component({
  selector: 'app-comprados',
  templateUrl: './comprados.component.html',
  styleUrls: ['./comprados.component.css']
})
export class CompradosComponent implements OnInit {

  ticketsComprados:any;

  constructor(private ticketServicio:TicketService) { }

  ngOnInit(): void {

    this.listarComprados();
      
    }

  listarComprados(){
    this.ticketServicio.listarVendidos().subscribe(res=>{
      this.ticketsComprados=res;
      console.log(res);
      
    });
  }

}

  


