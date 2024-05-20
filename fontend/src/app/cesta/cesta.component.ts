
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Cesta } from './cesta.model';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  carrinhoItens: any[] = [];
  total: number = 0;
  mensagem: string = "";
  
  constructor(private carrinhoService: CarrinhoService) {}
  
  ngOnInit() {
    this.carrinhoService.obterCarrinho().subscribe((carrinho) => {
      this.carrinhoItens = carrinho;
      this.total = this.carrinhoItens.reduce((result, current) => result + current.preco * current.quantidade, 0);
    });
  }

  remover(id: any) {
    if (this.carrinhoService) {
      this.carrinhoService.remover(id);
    } else {
      console.error('Erro: CarrinhoService não está disponível!');
    }
  }

  gravar() {
    const idCliente: string | null = localStorage.getItem("cliente");
    if (idCliente == null) {
      this.mensagem = "Faça login para finalizar a conta.";
      return;
    }
    if (this.carrinhoService) {
      const cesta: Cesta = new Cesta();
      cesta.idCliente = JSON.parse(String(idCliente)).id;
      cesta.itens = "";
      this.carrinhoItens.forEach(item => {
        cesta.itens = `${cesta.itens}${item.id};${item.quantidade}|`;
      });
      cesta.valorTotal = this.total;
      this.carrinhoService.gravar(cesta).subscribe(
        (retorno: Cesta) => {
          this.mensagem = "Pedido realizado com sucesso!";
        }
      )
    } else {
      this.mensagem = "Erro ao realizar pedido.";
    }
  }
}
