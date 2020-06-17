import { HomeComponent } from './../../home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formLoginEmail = new FormControl;
  formName = new FormControl;
  formEmail = new FormControl;
  formPassword = new FormControl;
  formCellPhone = new FormControl;
  formCpf = new FormControl;
  formDtNasc = new FormControl;
  formSex = new FormControl;
  formCep = new FormControl;
  formAddress = new FormControl;
  formNumber = new FormControl;
  formComplement = new FormControl;
  formDistrict = new FormControl;
  formCity = new FormControl;
  formState = new FormControl;

  url_client = '/api/clients';
  url_state = '/api/states';

  states: any;

  route = false;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    this.states = this.http.get(this.url_state);
  }

  onRegister() {
    let bory_client = {
      name: this.formName.value,
      email: this.formEmail.value,
      password: this.formPassword.value,
      cell_phone: this.formCellPhone.value,
      cpf: this.formCpf.value,
      dt_nasc: this.formDtNasc.value,
      sex: this.formSex.value,
      cep: this.formCep.value,
      address: this.formAddress.value,
      number: this.formNumber.value,
      complement: this.formComplement.value,
      district: this.formDistrict.value,
      city: this.formCity.value,
      state: this.formState.value
    }

    let params = bory_client
    let res: any

    let teste = this.http.post<any>(this.url_client, params).subscribe(
      data => {
        res = data.id;
        alert("Cadastrado com sucesso");
        this.router.navigate(['/']);
      },
      (err: HttpErrorResponse) => {
        alert("emial ja existe")
      }
    )
  }

}
