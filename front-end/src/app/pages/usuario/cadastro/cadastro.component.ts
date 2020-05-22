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

  url_client = 'http://localhost:1337/clients';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onRegister() {

    let bory_client = {
      name: this.formName.value,
      email: this.formEmail.value,
      password_hash: this.formPassword.value,
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
        alert("Cadastrou com sucesso")
      },
      (err: HttpErrorResponse) => {
        alert("emial ja existe")
      }
    )
    console.log(teste)

    
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
