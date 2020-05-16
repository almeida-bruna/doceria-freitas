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

  list_url = 'http://localhost:3333/filterclientid';

  results: any;
  item: any;

  constructor(private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    let clientId = {"id": sessionStorage.getItem('id')};

    if (clientId) {
        this.results = this.http.get(this.list_url, { params: clientId, headers: headers })
      }

  }

  openModalLogin() {
    this.modalService.open(LoginComponent)
  }

  openModalCarrinho() {
    this.modalService.open(CarrinhoComponent)
  }

}
