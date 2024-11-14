import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = "http://localhost:8080" ;

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
