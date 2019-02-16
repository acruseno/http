import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpclient: HttpClient) { }

  obtenerPersonas() {

  }

  obtenerPersona() {

  }

  eliminarPersonas(persona: any) {

  }
  
  agregarPersonas(persona: any) {

  }
}
