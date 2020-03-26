import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

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

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
