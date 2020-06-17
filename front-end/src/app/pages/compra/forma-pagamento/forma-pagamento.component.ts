import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {Product} from '../../home/home.model';
import {CartService} from '../carrinho/carrinho.service'
import { Router } from '@angular/router';
import * as moment from 'moment'

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.scss']
})
export class FormaPagamentoComponent implements OnInit {

  list_url = '/api/filterclientid';
  boleto = '/api/boleto';
  purchase = '/api/purchase'
  purchase_items = '/api/purchaseitems'

  results: any;

  constructor(private http:HttpClient, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }

    // console.log(this.cartService.items);


    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    let clientId = {"id": sessionStorage.getItem('id')};

    this.results = this.http.get(this.list_url, { params: clientId, headers: headers })

    // console.log(this.results);
  }

  gerarboleto() {
    let prod = this.cartService.total()
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`)


    let client = {"id": sessionStorage.getItem('id')};
    this.http.get(this.list_url, { params: client, headers: headers }).subscribe(
      res => {
        const resClient = res[0];

        console.log(resClient);

        let params = {"price": prod, "name": resClient.name, "street": resClient.address, "number": resClient.number,
        "complement": resClient.complement, "district": resClient.district, "state": resClient.state,
        "postalCode": resClient.cep, "registerNumber": resClient.cpf, "city": resClient.city
      };

      console.log(params);



      //GERANDO BOLETO
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
      }
    )




    //SALVANDO COMPRA

    const clientId = sessionStorage.getItem('id')
    const horaAtual = moment().format();
    let dados = {"payment_method": "Boleto", "date": horaAtual, "client_id": clientId};

    console.log(headers);


    this.http.post(this.purchase, dados, {headers: headers} ).subscribe(
      (res :any) => {
        this.results = res;

        const resp = Object.keys(this.cartService.items).map(item => {
          console.log(this.cartService.items[item].id)
          console.log(this.cartService.items[item].count)
          let data = {"qtd": this.cartService.items[item].count, "purchase_id": res.id, "product_id": this.cartService.items[item].id,
           "status_id": 1}
          console.log(data);

          this.http.post(this.purchase_items, data, {headers: headers} ).subscribe(
            res => {
              this.results = res;
            }
          );
        });


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

  habilitarBotao(){
    let btn_finalizar = (<HTMLElement>document.querySelector('#btn_finalizar'));
    btn_finalizar.setAttribute('style', 'display:block !important')
    let btn_bloquear = (<HTMLElement>document.querySelector('#btn_bloquear'));
    btn_bloquear.style.display = 'none';

  }

}
