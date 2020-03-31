import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.scss']
})
export class FormaPagamentoComponent implements OnInit {

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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
