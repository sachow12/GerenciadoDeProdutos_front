import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorProdutoService {

  private apiURL = 'http://localhost:8080/products'

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL)
  }

  criarProduto(produto: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiURL}`, produto)
  }
  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, produto);
  }
  deletarProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }



}
