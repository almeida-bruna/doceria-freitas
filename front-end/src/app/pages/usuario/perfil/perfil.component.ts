import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  list_url = '/api/filterclientid';

  results: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    
    let id = {"id": sessionStorage.getItem('id')};

    this.results = this.http.get(this.list_url, { params: id, headers: headers});
    console.log(this.results)
  }

}
