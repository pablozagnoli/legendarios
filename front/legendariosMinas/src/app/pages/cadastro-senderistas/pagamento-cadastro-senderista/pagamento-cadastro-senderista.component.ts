import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CadatroSenderitasServiceService } from '../services/cadatro-senderitas-service.service';

@Component({
  selector: 'app-pagamento-cadastro-senderista',
  templateUrl: './pagamento-cadastro-senderista.component.html',
  styleUrls: ['./pagamento-cadastro-senderista.component.css']
})
export class PagamentoCadastroSenderistaComponent implements OnInit, OnChanges {
  formGroup = this.cadatroSenderitasServiceService.pagamentoForm;

  textform = new FormControl();

  constructor(readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService,
    private router: Router) { }


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

        sessionStorage.setItem("numPag", response.id)
        this.navegarparastatuspagamento(response.id)
      },
      error: (error: any) => {

      }
    })
  }

  euaqui() {
    document.getElementById("testando")?.click();

  }

  navegarparastatuspagamento(numPag: string) {
    sessionStorage.setItem("recarregarstatuspagamento", "1");
    this.router.navigate(["status-pagamento"], {
      queryParams: {
        numPag: numPag,
      },
    });
  }

}
