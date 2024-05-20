import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CestaComponent } from './cesta/cesta.component';
// import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
// import { TermoComponent } from './termo/termo.component';
// import { PoliticaComponent } from './politica/politica.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


const routes: Routes = [
  {path: "", component:VitrineComponent},
  {path: "cliente", component:ClienteComponent},
  {path: "cliente/:id", component:ClienteComponent},  
  {path: "vitrine", component:VitrineComponent},
  {path: "cesta", component:CestaComponent},
  // {path: "lista", component:ListaClientesComponent},
  {path: "login", component:LoginComponent},
  {path: "esqueci-senha", component: EsqueciSenhaComponent },
  // {path: "termo", component: TermoComponent},
  // {path: "politica", component: PoliticaComponent},
  {path: "produtos", component: ListaProdutosComponent},
  {path: "produtos/:id", component: ProdutosComponent},
  {path: "lista-produtos/:desc", component: ListaProdutosComponent},
  {path: 'carrinho', component: CestaComponent }, // alterar para carrinho 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
