import { Component, OnInit } from '@angular/core';
import {CartService} from '../carrinho/carrinho.service'
import {Product} from '../../home/home.model';

@Component({
  selector: 'app-resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.scss']
})
export class ResumoPedidoComponent implements OnInit {
  // produtos = [
  //   {
  //     imagem: 'bala-recheada.webp',
  //     nome: 'Bala Toffer',
  //     quant: '1',
  //     preco: '10,00',
  //     total: '10.00'
  //   },
  //   {
  //     imagem: 'pirulito-pop.webp',
  //     nome: 'Pirulito Pop',
  //     quant: '2',
  //     preco: '13,00',
  //     total: '26.00'
  //   },
  //   {
  //     imagem: 'bubaaoo-uva.webp',
  //     nome: 'Bubaaoo',
  //     quant: '1',
  //     preco: '15,00',
  //     total: '15.00'
  //   }
  // ]

  constructor(private cartService: CartService) { }

  ngOnInit() {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }

}
