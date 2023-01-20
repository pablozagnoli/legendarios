import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento-cadastro-senderista',
  templateUrl: './pagamento-cadastro-senderista.component.html',
  styleUrls: ['./pagamento-cadastro-senderista.component.css']
})
export class PagamentoCadastroSenderistaComponent implements OnInit {
  acultaCartoes: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.contrlaVisibilidade();
  }

  ExibePix() {
    let acultaPix = document.getElementById("acultaPix");

    if (acultaPix != null) {

      if (acultaPix.hidden == true) {
        acultaPix.hidden = false
      } else {
        acultaPix.hidden = true
      }
    }
  }

  ExibeCartoes() {
    let acultaCartoes = document.getElementById("acultaCartoes");

    if (acultaCartoes != null) {

      if (acultaCartoes.hidden == true) {
        acultaCartoes.hidden = false
      } else {
        acultaCartoes.hidden = true
      }

    }
  }

  contrlaVisibilidade() {
    let acultaCartoes = document.getElementById("acultaCartoes");

    if (acultaCartoes != null) {
      acultaCartoes.hidden = true;
    }

    let acultaPix = document.getElementById("acultaPix");

    if (acultaPix != null) {
      acultaPix.hidden = true

    }

  }

}
