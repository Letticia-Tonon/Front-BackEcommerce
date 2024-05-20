import { Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  mensagem: string = "";
  obj: Cliente = new Cliente();
  error = false;
  lista: Cliente[] = [];

  constructor(private clienteService: ClienteService,
    private rotas: ActivatedRoute) { }

  ngOnInit() {
    let id = this.rotas.snapshot.paramMap.get("id");
    if (id != null) {
      this.obj.id = Number(id);
      this.pesquisar();
    }
  }

  public mostrar() {
    this.mensagem = "Registro gravado com sucesso!"; /* MENSAGEM DE CADASTRO*/
    let clienteAux: Cliente = new Cliente(this.obj);
    this.lista.push(clienteAux);
    window.localStorage.setItem('listaCliente', JSON.stringify(this.lista));
  }

  public gravar() {
    try {
      this.clienteService.gravar(this.obj).subscribe(
        (retorno: Cliente) => {
          this.mensagem = "Usuário cadastrado com sucesso!";
          this.error = false;
        }
      )
    } catch {
      this.mensagem = "Cadastro inválido, verifique as informações e tente novamente.";
      this.error = true;
    }
  }

  public pesquisar() {
    this.mensagem = "";
    try {
      this.clienteService.carregar(this.obj.id).subscribe(
        (retorno: Cliente) => {
          this.obj.email = retorno.email;
          this.obj.nome = retorno.nome;
          this.obj.sobrenome = retorno.sobrenome;
          this.obj.cpf = retorno.cpf;
          this.obj.senha = retorno.senha;
          this.obj.telefone = retorno.telefone;
          if (retorno.nome == null) this.mensagem = "Registro não encontrado!";
        });
    }
    catch {
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public remover() {
    try {
      this.clienteService.remover(this.obj.id);
      this.mensagem = "Cadastro removido com sucesso!";
    }
    catch {
      this.mensagem = "Ocorreu um erro durante o processo!";
    }
  }
}
