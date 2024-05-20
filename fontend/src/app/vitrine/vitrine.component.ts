import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { CarrinhoService } from '../service/carrinho.service';
import { Router } from '@angular/router';
import { Produtos } from '../produtos/produtos.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  lista: Produtos[] = [];
  mensagem: String = "";
  nomeUsuario: String = "";
  quantidadeDesejada: number = 1;

  constructor(
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router) { }
  ngOnInit(): void {
    this.listar();
    let nome = localStorage.getItem("nomeCliente");
    if (nome != null) this.nomeUsuario = "Olá, " + nome;
  }
  public listar() {
    try {
      this.produtosService.listar().subscribe(
        (retorno: Produtos[]) => {
          this.lista = this.shuffle(retorno).slice(0, 3);
          this.mensagem = "";
        },
        error => {
          console.error(error);  // Adicione este log para verificar se há erros na chamada.
          this.mensagem = "Erro ao obter a lista de produtos.";
        }
      );
    } catch {
      this.mensagem = "não foi encontrado nenhum registro !";
    }
  }

  public shuffle(array: Produtos[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  adicionarAoCarrinho(produto: Produtos) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
