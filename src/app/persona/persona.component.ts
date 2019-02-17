import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  agregarPersonaRegistro: any = {nombre: "", apellido: "", edad: ""};
  personas: any;
  constructor(private personaService: PersonaService) {
    
   }

  ngOnInit() {
  }

  agregarPersona() {
    console.log("se lanzo el evento agregar persona");
  }

  eliminarPersona(persona) {
    console.log("se lanzo el evento eliminar persona");
  }

  obtenerPersonas() {
    this.personaService.obtenerPersonas().subscribe(
      res => {
        this.personas = res.personas;
      },
      error => {
        console.log(JSON.stringify(error))
      }
    );
  }
}
