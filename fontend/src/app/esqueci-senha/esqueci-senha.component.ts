import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent {

  email: string = "";
  mensagem: string = "";
  
  constructor(private service: ClienteService, private router: Router) {
    
  }

  enviarEmailRecuperacao(){
    try {
      if (!this.email) {
        this.mensagem = 'Por favor, insira seu email antes de enviar a solicitação de recuperação de senha.';
        return;
      }
  
      this.service.enviarEmailRecuperacao(this.email).subscribe(
        (retorno: any) => {
          this.mensagem = 'Um email de recuperação foi enviado. Por favor, verifique sua caixa de entrada.';
          
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        (erro: any) => {
          console.error('Erro ao enviar email de recuperação:', erro);
          this.mensagem = 'Ocorreu um erro ao enviar o email de recuperação. Tente novamente mais tarde.';
        }
      );
    } catch (error) {
      console.error('Erro:', error);
      this.mensagem = 'Ocorreu um erro. Tente novamente mais tarde.';
    }
  }
}