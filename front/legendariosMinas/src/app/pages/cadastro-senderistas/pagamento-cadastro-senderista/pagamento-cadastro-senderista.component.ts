import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CadatroSenderitasServiceService } from '../services/cadatro-senderitas-service.service';

@Component({
  selector: 'app-pagamento-cadastro-senderista',
  templateUrl: './pagamento-cadastro-senderista.component.html',
  styleUrls: ['./pagamento-cadastro-senderista.component.css']
})
export class PagamentoCadastroSenderistaComponent implements OnInit, OnChanges {
  formGroup = this.cadatroSenderitasServiceService.pagamentoForm;

  textform = new FormControl();

  constructor(readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService,) { }


  ngOnChanges(changes: SimpleChanges): void {



    let buton = document.getElementById("containerpagamento")?.getElementsByTagName("button")[0];

    if (buton == undefined) {
      buton = new HTMLButtonElement
    }


    (buton as HTMLButtonElement).click = this.enviarPagamento;
  }

  ngOnInit(): void {

  }

  async enviarPagamento() {

    let param = sessionStorage.getItem("formData");

    this.cadatroSenderitasServiceService.PostPagamento(param).subscribe({
      next: (response: any) => {

      },
      error: (error: any) => {

      }
    })
  }



}
