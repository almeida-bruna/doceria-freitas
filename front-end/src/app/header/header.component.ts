import { CarrinhoComponent } from './../pages/compra/carrinho/carrinho.component';
import { LoginComponent } from './../pages/login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalLogin() {
    this.modalService.open(LoginComponent)
  }

  openModalCarrinho() {
    this.modalService.open(CarrinhoComponent)
  }

}
