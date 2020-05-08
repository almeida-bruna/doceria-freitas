import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../home/home.model';
import {CartService} from './carrinho.service'
import { default as swal } from 'sweetalert2'
import {default as NProgress} from 'nprogress'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

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

  constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }

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

  removeItem(Product){
    let c = this.cartService

    return c.removeItem(Product)

  }

  total(){
    return this.cartService.total()
  }

}
