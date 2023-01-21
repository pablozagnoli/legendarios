import { Component, OnInit } from '@angular/core';
import { CadatroSenderitasServiceService } from '../services/cadatro-senderitas-service.service';

@Component({
  selector: 'app-pagamento-cadastro-senderista',
  templateUrl: './pagamento-cadastro-senderista.component.html',
  styleUrls: ['./pagamento-cadastro-senderista.component.css']
})
export class PagamentoCadastroSenderistaComponent implements OnInit {
  formGroup = this.cadatroSenderitasServiceService.pagamentoForm;

  constructor(readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService,) { }

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

  enviarPagamento() {
    let param = {
      installments: 5,
      issuer_id: 2,
      payer: {
        email: this.formGroup.get("emailsenderista")?.value,
        identification: {
          number: this.formGroup.get("cpfsenderista")?.value,
          type: "CPF"
        }
      },
      payment_method_id: "MASTER",
      token: "123",
      transaction_amount: "1.00.00"
    }


    let paramCard = {
      card_number: this.formGroup.get("numcartao")?.value,
      cardholder: {
        name: this.formGroup.get("nometitularcartao")?.value,
        identification: {
          type: "CPF",
          number: this.formGroup.get("doctitularcartao")?.value
        }
      },
      expiration_month: this.formGroup.get("mesvencimentocartao")?.value,
      expiration_year: "20" + this.formGroup.get("anovencimentocartao")?.value,
      security_code: this.formGroup.get("codsegurancacartao")?.value
    }


    this.cadatroSenderitasServiceService.GetTokenCard(paramCard).subscribe({
      next: (response: any) => {
        param.token = response.token
      },
      error: (error: any) => {

      }
    })

    this.cadatroSenderitasServiceService.PostPagamento(param).subscribe({
      next: (response: any) => {

      },
      error: (error: any) => {

      }
    })
  }

}
