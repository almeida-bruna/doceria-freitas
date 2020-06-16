import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {Product} from '../../home/home.model';
import {CartService} from '../carrinho/carrinho.service'

@Component({
  selector: 'app-gerar-boleto',
  templateUrl: './gerar-boleto.component.html',
  styleUrls: ['./gerar-boleto.component.scss']
})
export class GerarBoletoComponent implements OnInit {
  boleto_url = '/api/boleto/boleto.pdf';
  results: any;
  boleto: any;


  constructor(private http:HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
     //sessionStorage.removeItem("cart")
     let cartSession = sessionStorage.getItem("cart");
     //carrinho não está vazio
     if(cartSession != null){
       this.cartService.items = JSON.parse(cartSession);
     }
     console.log('dael');

     console.log(cartSession);
    //  for (let index in cartSession) {
    //   console.log(typeof(index));
    // };

    //  const token = localStorage.getItem('token');

    //  const headers = new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${token}`
    //  })

    //  let clientId = {"id": sessionStorage.getItem('id')};

    //  this.results = this.http.get(this.list_url, { params: clientId, headers: headers })

    //  console.log(this.results);


  }

  obterBoleto() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'POST, PUT, DELETE, GET, OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Content-Length, Accept-Encoding, Authorization, X-Requested-With'

    })

    // this.http.get(this.boleto_url, {headers: headers, responseType: 'blob' as 'json'})
    // .subscribe((res: any) => console.log(res));

    this.http.get(this.boleto_url, {headers: headers, responseType: 'blob' as 'json'})
    .subscribe((res: any) => {
      const file = new Blob([res], {
        type: res.type
      });

      const blob = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blob;
      link.download = 'boleto.pdf'

      link.click();

      window.URL.revokeObjectURL(blob);
      link.remove();
    })

    sessionStorage.removeItem('cart');
  }

}
