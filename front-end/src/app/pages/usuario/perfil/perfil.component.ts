import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  list_url = '/api/filterclientid';
  url_state = '/api/states';

  results: any;
  states: any;
  stateClient: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    
    let id = {"id": sessionStorage.getItem('id')};

    this.results = this.http.get(this.list_url, { params: id, headers: headers});
    
    this.results.forEach(itens => {
      if (itens[0].state){
        this.states = this.http.get(this.url_state);
        this.states.forEach(element => {
          element.forEach(state => {
            if(state.id == itens[0].state){
              this.stateClient = state.name
            }
          });
          
        });
      }
    });
  }

}
