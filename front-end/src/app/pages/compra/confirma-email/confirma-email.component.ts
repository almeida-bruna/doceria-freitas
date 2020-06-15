import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirma-email',
  templateUrl: './confirma-email.component.html',
  styleUrls: ['./confirma-email.component.scss']
})
export class ConfirmaEmailComponent implements OnInit {

  formLoginEmail = new FormControl;
  formLoginPassword = new FormControl;

  login = '/api/sessions';

  results: any;

  constructor(private http:HttpClient, private router: Router) { }

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
        sessionStorage.setItem('id', this.results.client.id)
        localStorage.setItem ('token', this.results.token);
        this.router.navigate(['forma-pagamento']);
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
