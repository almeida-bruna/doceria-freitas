import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.scss']
})
export class ResumoPedidoComponent implements OnInit {
  produtos = [
    {
      imagem: 'bala-recheada.webp',
      nome: 'Bala Toffer',
      quant: '1',
      preco: '10,00',
      total: '10.00'
    },
    {
      imagem: 'pirulito-pop.webp',
      nome: 'Pirulito Pop',
      quant: '2',
      preco: '13,00',
      total: '26.00'
    },
    {
      imagem: 'bubaaoo-uva.webp',
      nome: 'Bubaaoo',
      quant: '1',
      preco: '15,00',
      total: '15.00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
