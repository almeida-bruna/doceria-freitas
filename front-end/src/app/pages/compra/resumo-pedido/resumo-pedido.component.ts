import { Component, OnInit } from '@angular/core';
import {CartService} from '../carrinho/carrinho.service'
import {Product} from '../../home/home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.scss']
})
export class ResumoPedidoComponent implements OnInit {
 
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  validaSession() {
    let id = sessionStorage.getItem('id')

    if(id) {
      this.router.navigate(['forma-pagamento']);
    } else {
      this.router.navigate(['confirma-email']);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }

  total(){
    return this.cartService.total()
  }

}
