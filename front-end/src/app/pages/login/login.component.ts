import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLoginEmail = new FormControl;
  formLoginPassword = new FormControl;

  login = 'http://localhost:3333/sessions';

  results: any;

  constructor(public activeModal: NgbActiveModal, private http:HttpClient,) { }

  ngOnInit(): void {
  }

  onLogin() {
    let loginValue = {
      email: this.formLoginEmail.value,
      password: this.formLoginPassword.value
    }

    let params = loginValue;

   this.http.post(this.login, params ).subscribe(
      res => {
        this.results = res;
        console.log(this.results);
        alert('Logou');
        sessionStorage.setItem('nome', this.results.client.name);
        sessionStorage.setItem('id', this.results.client.id);
        localStorage.setItem ('token', this.results.token);
      },
      (err: HttpErrorResponse) => {
        alert(JSON.stringify(err.error.error));
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      },
      );
  }
}
