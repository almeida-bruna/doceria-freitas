import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  produto = [
    {
      nome: "Bubaaloo Uva", 
      valor_anterior:"20,00",
      valor: "18,00", 
      quantidade: "50 unidades",
      imagem: "bubaaoo-uva.webp"
    },
    {
      nome: "Bala Butter Toffer", 
      valor_anterior:"18,00",
      valor: "15,00", 
      quantidade: "50 unidades",
      imagem: "bala-recheada.webp"
    },
    {
      nome: "Pirulito Pop", 
      valor_anterior:"13,00",
      valor: "10,00", 
      quantidade: "50 unidades",
      imagem: "pirulito-pop.webp"
    }
  ]

}
