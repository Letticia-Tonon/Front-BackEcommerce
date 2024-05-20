import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../cliente/cliente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensagem: String = "";
  obj: Cliente = new Cliente();

  constructor(private service: ClienteService) { }

  fazerLogin() {
    try {
      this.service.login(this.obj).subscribe(
        (retorno: Cliente) => {
          if (retorno.nome == null) {
            this.mensagem = "E-mail ou senha invalidos!";
          } else {
            localStorage.setItem("nomeCliente", retorno.nome);
            localStorage.setItem("cliente", JSON.stringify(retorno));
            window.location.href = "./produtos";
          }
        });
    }
    catch (e) {
      this.mensagem = "Ocorreu um erro volte mais tarde!";
    }
  }
}
