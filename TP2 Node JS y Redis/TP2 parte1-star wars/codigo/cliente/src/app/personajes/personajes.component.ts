import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from '../servicios/api.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes :any;
  episodio:string="";

  constructor(private route:ActivatedRoute, private servicio:ApiService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
    //capturo el id en la ruta
    this.episodio=this.route.snapshot.paramMap.get('id');
    console.log(this.episodio);

    this.llamoServicioListar()
  }

  agregarPersonaje(value: string): void {
    console.log(value);
    this.servicio.agregarPersonaje(value,this.episodio).subscribe(res=>{
      console.log(res);
      this.llamoServicioListar();
    })
  }

  llamoServicioListar(){
    this.servicio.listarPersonajes(this.episodio).subscribe(res=>{
      console.log(res);
      this.personajes=res;
    })
  }

  eliminarPersonaje(personaje:string){
    this.servicio.eliminarPersonaje(personaje, this.episodio).subscribe(res=>{
      console.log(res);
      this.llamoServicioListar();
    });
  }


  

}
