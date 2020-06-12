import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesPedidoComponent } from './../detalhes-pedido/detalhes-pedido.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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
