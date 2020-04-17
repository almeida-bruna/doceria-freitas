import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formLoginEmail = new FormControl;

  cadastro = 'http://localhost:3333/clients';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onRegister() {

    console.log(this.formLoginEmail.value);
    
  //   let loginValue = {
  //     email: this.formLoginEmail.value,
  //     password: this.formLoginPassword.value
  //   }

  //   let params = loginValue;

  //  this.http.post(this.login, params ).subscribe(
  //     res => {
  //       this.results = res;
  //       console.log(this.results);
  //       alert('Logou');
  //       localStorage.setItem ('token', this.results.token);
  //     },
  //     (err: HttpErrorResponse) => {
  //       alert(JSON.stringify(err.error.error));
  //       console.log(err.name);
  //       console.log(err.message);
  //       console.log(err.status);
  //     },
  //     );
  }

}
