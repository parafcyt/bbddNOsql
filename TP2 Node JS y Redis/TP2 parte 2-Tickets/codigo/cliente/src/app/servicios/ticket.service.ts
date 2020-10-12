import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {


  //para definir la url del servidor
  private url: string ="http://localhost:5000/";

  constructor(private httpClient:HttpClient) { }


  //FUNCIONES PARA LAS PETICIONES
  listarDisponibles( ){
    return this.httpClient.get(this.url+'listar/disponibles')
  }
  listarReservados(){
    return this.httpClient.get(this.url+'listar/reservados')
  }
  listarVendidos(){
    return this.httpClient.get(this.url+'listar/vendidos')
  }

  reservar(nroTicket:Number){
    return this.httpClient.get(this.url+'reservar/'+nroTicket)
  }

  comprar(nroTicket:Number){
    return this.httpClient.get(this.url+'comprar/'+nroTicket)
  }

  iniciar(numeroDeInput: String){
    return this.httpClient.get(this.url+'iniciar/'+numeroDeInput)
  }

  
}
