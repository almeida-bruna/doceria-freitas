import { LoginComponent } from './../login/login.component';
import { CarrinhoComponent } from './../compra/carrinho/carrinho.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { default as NProgress } from 'nprogress'
import { CartService } from '../compra/carrinho/carrinho.service'
import { Product } from './home.model';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

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

  // HEADER
  list_url_cliente = 'http://localhost:3333/filterclientid';
  results_client: any;
  item: any;
  name: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.product = this.http.get(this.list_url)
    console.log(this.product);

    // HEADER

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    let clientId = {"id": sessionStorage.getItem('id')};
    let clientName = sessionStorage.getItem('nome');
    console.log(clientName)

    if (clientId) {
      this.results = this.http.get(this.list_url, { params: clientId, headers: headers })
    }

    if (clientName) {
      this.name = clientName;
    } else {
      this.name = 'Login'
    }
  }

  openModalCarrinho() {
    this.modalService.open(CarrinhoComponent)
  }

  addCart(Product) {
    NProgress.start()
    this.cartService.addItem(Product)
    NProgress.done()
  }

  onSearch(cateroria = null) {
    this.product = [];

    if (cateroria) {
      var searchValue = cateroria;
      var params = { "name": searchValue };
    } else {
      var searchValue = this.searchProduct.value;
      var params = { "name": searchValue };
    }
    this.product = this.http.get(this.search_url, { params })
    console.log("chegou")
    console.log(this.product);
  }

  // teste header

  openModalLogin() {
    this.modalService.open(LoginComponent)
  }

  minhaConta(){
    let teste = (<HTMLElement>document.querySelector('.mostrar-conta'));

    if (teste.style.display == 'block'){
      teste.style.display = 'none'
    }else{
      teste.style.display = 'block'
    }
  }

}
