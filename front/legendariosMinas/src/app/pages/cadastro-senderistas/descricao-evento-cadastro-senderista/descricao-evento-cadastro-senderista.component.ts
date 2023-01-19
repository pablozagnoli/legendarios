import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao-evento-cadastro-senderista',
  templateUrl: './descricao-evento-cadastro-senderista.component.html',
  styleUrls: ['./descricao-evento-cadastro-senderista.component.css']
})
export class DescricaoEventoCadastroSenderistaComponent implements OnInit {

  Cadastrovisivel: boolean = true;
  Textovisivel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  AlterarVisibilidade() {
    this.Cadastrovisivel = false;
    this.Textovisivel = true;
  }

}
