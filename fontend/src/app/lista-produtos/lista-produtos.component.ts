import { Component } from '@angular/core';
import { Produtos } from '../produtos/produtos.model';
import { ProdutosService } from '../service/produtos.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  lista :  Produtos[] = [];
  mensagem : String = "";
  nomeUsuario: String = "";
  quantidadeDesejada: number = 1;
  
  constructor(
    private produtosService : ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private rotas: ActivatedRoute){}

  ngOnInit(){
    let desc = this.rotas.snapshot.paramMap.get("desc");
    this.listar(desc);
    let nome = localStorage.getItem("nomeCliente");
    if(nome!=null) this.nomeUsuario = "Olá, "+ nome ;
  }
  public listar(desc: String | null) {
    try{ 
      this.produtosService.listar(desc).subscribe(
        (retorno: Produtos[]) => {            
          console.log(retorno);
          this.lista = retorno;
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

  adicionarAoCarrinho(produto: Produtos) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}





