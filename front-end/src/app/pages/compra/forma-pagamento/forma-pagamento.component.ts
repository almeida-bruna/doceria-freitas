import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {Product} from '../../home/home.model';
import {CartService} from '../carrinho/carrinho.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.scss']
})
export class FormaPagamentoComponent implements OnInit {

  list_url = '/api/filterclientid';
  boleto = '/api/boleto';

  results: any;

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
  //   }
  // ]

  constructor(private http:HttpClient, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }


    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    let clientId = {"id": sessionStorage.getItem('id')};

    this.results = this.http.get(this.list_url, { params: clientId, headers: headers })

    console.log(this.results);
  }

  gerarboleto() {
    let prod = this.cartService.total()

    let params = {"price": prod};

   this.http.post(this.boleto, params ).subscribe(
      res => {
        this.results = res;

        // console.log(this.results);
        // alert('Logou');

      },
      (err: HttpErrorResponse) => {
        // alert(JSON.stringify(err.error.error));
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      },
    );
    this.router.navigate(['gerar-boleto']);
  }


  items(): Product[] {
    return this.cartService.items;
  }

  total(){
    return this.cartService.total()
  }

}
