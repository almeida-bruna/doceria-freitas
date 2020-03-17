import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchProduct = new FormControl;

  search_url = 'http://localhost:3333/filter';

  results: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
  }

  produto = [
    {
      nome: "Bubaaloo Uva",
      valor: "18,00",
      quantidade: "50 unidades",
      imagem: "bubaaoo-uva.webp"
    },
    {
      nome: "Bala Butter Toffer",
      valor: "15,00",
      quantidade: "50 unidades",
      imagem: "bala-recheada.webp"
    },
    {
      nome: "Pirulito Pop",
      valor: "10,00",
      quantidade: "50 unidades",
      imagem: "pirulito-pop.webp"
    }
  ]

  onSearch() {
    let searchValue = this.searchProduct.value;

    let params = { "name": searchValue };

    this.results = this.http.get(this.search_url, { params } )

    console.log(this.results);
  }

}
