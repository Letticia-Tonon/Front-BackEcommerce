import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Cliente } from '../cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  public gravar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8081/api/cliente", obj);
  }

  public alterar(obj: Cliente) {
    this.http.put<String>("http://localhost:8081/api/cliente", obj)
      .subscribe();
  }

  public carregar(id: number): Observable<Cliente> {
    return this.http.get<Cliente>("http://localhost:8081/api/cliente/" + id);
  }

  public remover(id: number) {
    return this.http.delete<String>("http://localhost:8081/api/cliente/" + id).subscribe();
  }

  public listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:8081/api/cliente/lista");
  }

  public login(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8081/api/cliente/login", obj);
  }
  public enviarEmailRecuperacao(email: string): Observable<any> {
    return this.http.post<any>("http://localhost:8081/api/cliente/recuperar/" + email, email, { responseType: 'text' as 'json' });
  }
}
