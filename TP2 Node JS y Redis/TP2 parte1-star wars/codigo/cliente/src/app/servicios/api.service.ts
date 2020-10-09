import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi="http://localhost:3000/api/";

  constructor(private httpCliente: HttpClient) { }

  //listar personajes de episodio
  listarPersonajes(episodio:String){

    return this.httpCliente.get(this.urlApi+"listarpersonajes/"+episodio)
  }

  //eliminar personaje
  eliminarPersonaje(personaje:String,episodio:String){
    return this.httpCliente.delete(this.urlApi+"eliminarpersonaje/"+episodio+"/"+personaje)
  }

  //agregar personaje a episodio
  agregarPersonaje(personaje:String,episodio:String){
    return this.httpCliente.post(this.urlApi+`agregarpersonaje/${episodio}/${personaje}`, {})//espera un JSON
  }



}
