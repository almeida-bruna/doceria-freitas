import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../carrinho/carrinho.service'


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  // produto = {
  //     nome: "Bubaaloo Uva",
  //     valor: "18,00",
  //     quantidade: "50 unidades",
  //     imagem: "bubaaoo-uva.webp"
  //   }
  public productId;
  product: any;

  list_url = '/api/filterproductid';

  constructor(private http:HttpClient, private modalService: NgbModal, private route: ActivatedRoute, private cartService: CartService) {
    this.route.params.subscribe(params => this.productId = params['id']);
   }

  ngOnInit(): void {

    let params = { "id": this.productId };

    this.product = this.http.get(this.list_url, { params } )
    console.log(this.product);

  }

  addCart(Product) {
    this.cartService.addItem(Product)
  }

}
