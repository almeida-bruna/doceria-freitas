import { CarrinhoComponent } from './../compra/carrinho/carrinho.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { default as NProgress } from 'nprogress'
import { CartService } from '../compra/carrinho/carrinho.service'
import { Product } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchProduct = new FormControl;

  search_url = 'http://localhost:3333/filterproduct';
  list_url = 'http://localhost:3333/product';

  results: any;
  product: any;

  products: Product[];
  constructor(private http: HttpClient, private modalService: NgbModal, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.product = this.http.get(this.list_url)

    console.log(this.product);

  }

  openModalCarrinho() {
    this.modalService.open(CarrinhoComponent)
  }

  addCart(Product) {
    NProgress.start()
    this.cartService.addItem(Product)
    NProgress.done()
  }

  onSearch() {
    this.product = [];

    var searchValue = this.searchProduct.value;

    let params = { "name": searchValue };

    this.product = this.http.get(this.search_url, { params })

    console.log(this.product);
  }

}
