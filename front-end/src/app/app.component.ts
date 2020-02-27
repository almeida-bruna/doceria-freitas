import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produto = [
    {
      nome: "Bubaaloo Uva", 
      valor: "18,00", 
      quantidade: "50 unidades",
      imagem: "bubaaoo-uva.webp"
    },
    {
      nome: "Bala Butter Toffer", 
      valor: "15,00", 
      quantidade: "50 unidades",
      imagem: "bala-recheada.webp"
    },
    {
      nome: "Pirulito Pop", 
      valor: "10,00", 
      quantidade: "50 unidades",
      imagem: "pirulito-pop.webp"
    }
  ]
}
