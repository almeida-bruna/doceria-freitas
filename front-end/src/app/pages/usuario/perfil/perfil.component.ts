import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  nome: any;

  constructor() { }

  ngOnInit(): void {
    this.nome = sessionStorage.getItem("nome");
  }

}
