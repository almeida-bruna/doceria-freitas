import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto = {
      nome: "Bubaaloo Uva",
      valor: "18,00",
      quantidade: "50 unidades",
      imagem: "bubaaoo-uva.webp"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
