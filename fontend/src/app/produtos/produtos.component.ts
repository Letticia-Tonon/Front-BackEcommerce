import { Component } from '@angular/core';
import { Produtos } from './produtos.model';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CarrinhoService } from '../service/carrinho.service';
import { NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  mensagem : string = "";
  produto: Produtos = new Produtos();
  lista: Produtos[] = [];
formulario: any;
  // carrinhoService: any;
  
  constructor(
    private produtosService: ProdutosService, 
    private rotas: ActivatedRoute,
    private carrinhoService: CarrinhoService) {}

  ngOnInit(){
    let id = this.rotas.snapshot.paramMap.get("id");
    if(id!=null){
      this.produto.id = Number(id);
      this.pesquisar();
    }   
  }              

  public mostrar(){
    this.mensagem = "Registro gravado com sucesso!";
    let produtosAux : Produtos = new Produtos(this.produto);    
    this.lista.push(produtosAux);
    window.localStorage.setItem('listaProdutos', JSON.stringify(this.lista));
  }

  public gravar(){
    try{
      if(this.produto.id==0){
        this.produtosService.gravar(this.produto);
        this.mensagem = "Produto gravado com sucesso!";
      }  else {
        this.produtosService.alterar(this.produto);
        this.mensagem = "Produtp alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public pesquisar(){
    this.mensagem = "";
    try{      
      this.produtosService.carregar(this.produto.id).subscribe(
        (retorno: Produtos) => {            
          this.produto.nome_produto = retorno.nome_produto;
          this.produto.descricao_curta =  retorno.descricao_curta;
          this.produto.descricao_longa = retorno.descricao_longa;
          this.produto.preco = retorno.preco;
          this.produto.link_foto = retorno.link_foto;
          if(retorno.nome_produto==null)  this.mensagem = "Registro não encontrado!";          
        });
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public remover(){
    try{
      this.produtosService.remover(this.produto.id);
      this.mensagem = "Produto removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }

  adicionarAoCarrinho() {
    if (this.carrinhoService) {
      this.carrinhoService.adicionarAoCarrinho(this.produto);
    } else {
      console.error('Erro: CarrinhoService não está disponível!');
    }
  }

}






