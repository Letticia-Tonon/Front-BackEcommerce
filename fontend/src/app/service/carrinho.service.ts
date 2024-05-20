import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cesta } from '../cesta/cesta.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private chaveCarrinho = 'carrinho';

  private carrinhoSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    const carrinhoString = localStorage.getItem(this.chaveCarrinho);
    const carrinho = carrinhoString ? JSON.parse(carrinhoString) : [];
    this.carrinhoSubject.next(carrinho);
  }

  public adicionarAoCarrinho(produto: any): void {
    const carrinhoAtual = [...this.carrinhoSubject.value];

    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinhoAtual.find((p) => p.id === produto.id);

    if (produtoExistente) {
      // Se o produto já estiver no carrinho, aumenta a quantidade
      produtoExistente.quantidade += 1;
    } else {
      // Se o produto não estiver no carrinho, adiciona ao carrinho com quantidade inicial de 1
      carrinhoAtual.push({ ...produto, quantidade: 1 });
    }

    this.atualizarCarrinho(carrinhoAtual);
  }

  obterCarrinho(): Observable<any[]> {
    return this.carrinhoSubject.asObservable();
  }

  private atualizarCarrinho(carrinho: any[]): void {
    localStorage.setItem(this.chaveCarrinho, JSON.stringify(carrinho));
    this.carrinhoSubject.next(carrinho);
  }

  public remover(id: any): void {
    const carrinhoAtual = [...this.carrinhoSubject.value];
    this.atualizarCarrinho([]);
    for (let i = 0; i < carrinhoAtual.length; i++) {
      if (carrinhoAtual[i].id === id) {
        carrinhoAtual.splice(i, 1);
        break;
      }
    }
    this.atualizarCarrinho(carrinhoAtual);
  }

  public gravar(obj: Cesta): Observable<Cesta> {
      return this.http.post<Cesta>("http://localhost:8081/api/pedido", obj);
  }
}
