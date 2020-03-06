import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
