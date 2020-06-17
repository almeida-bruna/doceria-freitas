import { element } from 'protractor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesPedidoComponent } from './../detalhes-pedido/detalhes-pedido.component';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  url_purchasehistory = '/api/filterpurchasehistory';
  url_purchaseitems = '/api/filterpurchaseitems';

  resultsPurchaseHistory: any;
  resultsPurchaseItems: any;

  constructor(private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    
    let id = {"client_id": sessionStorage.getItem('id')};

    this.resultsPurchaseHistory = this.http.get(this.url_purchasehistory, { params: id, headers: headers});

    this.resultsPurchaseHistory.forEach(element => {
      element.forEach(item => {
        let purchase_id = {"purchase_id": item.id};
        this.resultsPurchaseItems = this.http.get(this.url_purchaseitems, { params: purchase_id, headers: headers});
        this.resultsPurchaseItems.forEach(purchaseItems => {
          // console.log(purchaseItems)
          let cont = 0;
          purchaseItems.forEach(item2 => {
            cont+=1
          });
        });

      });
      
    });
  }

  openModalDetalhes(){
    this.modalService.open(DetalhesPedidoComponent)
  }

  cancelarPedido(id){
    var r = confirm("Tem certeza de que quer cancelar o pedido?");
    if (r == true) {
      alert("Pedido Cancelado. Caso já tenha pago o boleto, o estorno acontecera em até 10 dias uteis.")
      let teste = (<HTMLElement>document.querySelector('#'+ id));
      teste.style.backgroundColor = '#FF0000';
      teste.innerHTML = "Cancelado";
    } else {
      alert("Ufa")
    }
  }

}
