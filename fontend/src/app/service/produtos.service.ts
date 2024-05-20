import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Produtos } from '../produtos/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private http : HttpClient) {}

  public gravar(obj : Produtos){          
    this.http.post<String>("http://localhost:8081/api/produtos", obj)
    .subscribe();        
  }
  
  public alterar(obj : Produtos){          
    this.http.put<String>("http://localhost:8081/api/produtos", obj)
    .subscribe();        
  }

  public carregar(id: number): Observable<Produtos>{
    return this.http.get<Produtos>("http://localhost:8081/api/produtos/"+id);         
  }

  public remover(id: number) {
    return this.http.delete<String>("http://localhost:8081/api/produtos/"+id).subscribe();    
  }

  public listar(desc: String | null = null): Observable<Produtos[]>{
    if(desc != null && desc != ""){
      return this.http.get<Produtos[]>("http://localhost:8081/api/produtos/desc/"+desc);         
    }
    return this.http.get<Produtos[]>("http://localhost:8081/api/produtos/lista");         
  }

  
}
