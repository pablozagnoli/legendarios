import { Component, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
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
    private router: Router,
    private renderer: Renderer2) { }


  ngOnChanges(changes: SimpleChanges): void {



    let buton = document.getElementById("containerpagamento")?.getElementsByTagName("button")[0];

    if (buton == undefined) {
      buton = new HTMLButtonElement
    }


    (buton as HTMLButtonElement).click = this.enviarPagamento;
  }

  ngOnInit(): void {
    this.CarregarScripts();
  }

  GetScriptConfiguracaoPrincipalMercadoPago(): string {

    const retorno =
      `
  const mp = new MercadoPago('APP_USR-185bfd07-2552-4ecd-990c-0abbac069d15');

  const bricksBuilder = mp.bricks();


  const renderPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: 100, // valor total a ser pago
        paymentId: '53958642296',
      },
      customization: {
        paymentMethods: {
          creditCard: 'all',
          debitCard: 'all',
          bankTransfer: ['pix'],
        },
      },
      callbacks: {
        onReady: () => {
          /*
            Callback chamado quando o Brick estiver pronto.
            Aqui você pode ocultar loadings do seu site, por exemplo.
          */
        },
        onSubmit: ({ selectedPaymentMethod, formData }) => {

          sessionStorage.setItem("formData", JSON.stringify(formData))

          let textfor = document.getElementById("acioneeventodeclickpagamento");
          textfor.click();

          // callback chamado ao clicar no botão de submissão dos dados
          return new Promise((resolve, reject) => {

          });
        },
        onError: (error) => {
          // callback chamado para todos os casos de erro do Brick
          console.error(error);
        },
      },
    };

      await new Promise(f => setTimeout(f, 3000));
      window.paymentBrickController = await bricksBuilder.create(
        'payment',
        'containerpagamento',
        settings
      );
  };

  renderPaymentBrick(bricksBuilder);


    `;

    return retorno;
  }

  CarregarScripts() {



    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.id = "1995";
    script.text = this.GetScriptConfiguracaoPrincipalMercadoPago();
    this.renderer.appendChild(document.body, script);

  }

  async enviarPagamento() {

    let param = sessionStorage.getItem("formData");

    this.cadatroSenderitasServiceService.PostPagamento(param).subscribe({
      next: (response: any) => {

        this.navegarparastatuspagamento(response.id)
      },
      error: (error: any) => {
        alert(error);
      }
    })
  }


  navegarparastatuspagamento(numPag: string) {

    this.router.navigate(["status-pagamento"], {
      queryParams: {
        numPag: numPag,
      },
    });

  }

}
