import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CestaComponent } from './cesta/cesta.component';
// import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
// import { TermoComponent } from './termo/termo.component';
// import { PoliticaComponent } from './politica/politica.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoService } from './service/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,   ClienteComponent,    VitrineComponent,
    CestaComponent,
    // ListaClientesComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    // TermoComponent,
    // PoliticaComponent,
    ProdutosComponent,
    ListaProdutosComponent,],
  imports: [
    BrowserModule,    AppRoutingModule,  FormsModule, HttpClientModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
