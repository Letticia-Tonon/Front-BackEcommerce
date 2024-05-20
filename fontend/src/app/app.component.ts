import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web06';
  busca = "";
  nome = "";
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.nome = localStorage.getItem("nomeCliente") !== null ? `${localStorage.getItem("nomeCliente")}` : "";
  }

  buscarProdutos() {
    this.router.navigate([`./lista-produtos/${this.busca}`]);
  }

  onChange(event: any) {
    this.busca = event.target.value;
  }

  fazerLogoff() {
    localStorage.clear();
    this.nome = "";
    window.location.href = "./login";
  }
}
