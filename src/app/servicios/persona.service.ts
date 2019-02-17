import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpclient: HttpClient) { }

  obtenerPersonas(): Observable<any> {
    return this.httpclient.get('http:/localhost:8080/persona');
  }

  eliminarPersonas(persona: any): Observable<any> {
    return this.httpclient.get('http:/localhost:8080/persona/' + persona);
  }
  
  agregarPersonas(persona: any) {
    let json = JSON.stringify(persona);
    let header = new HttpHeaders().set('Content-Type', 'Application/json');

    return this.httpclient.post('http:/localhost:8080/persona', json, { headers: header });
  }
}
