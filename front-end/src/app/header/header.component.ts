import { HomeComponent } from './../pages/home/home.component';
import { CarrinhoComponent } from './../pages/compra/carrinho/carrinho.component';
import { LoginComponent } from './../pages/login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  list_url = '/api/filterclientid';

  results: any;
  item: any;
  name: any;

  constructor(private modalService: NgbModal, private http:HttpClient, private home:HomeComponent) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    let clientId = {"id": sessionStorage.getItem('id')};
    let clientName = sessionStorage.getItem('nome');

    if (clientId) {
      this.results = this.http.get(this.list_url, { params: clientId, headers: headers })
    }

    if (clientName) {
      this.name = clientName;
    } else {
      this.name = 'Login'
    }
  }

  openModalLogin() {
    this.modalService.open(LoginComponent)
  }

  openModalCarrinho() {
    this.modalService.open(CarrinhoComponent)
  }

  minhaConta(){
    let teste = (<HTMLElement>document.querySelector('.mostrar-conta'));

    if (teste.style.display == 'block'){
      teste.style.display = 'none'
    }else{
      teste.style.display = 'block'
    }
  }

  Submit() {
    location.reload();
  }

  exitConta(){
    sessionStorage.clear();
    this.Submit();
    }

}
