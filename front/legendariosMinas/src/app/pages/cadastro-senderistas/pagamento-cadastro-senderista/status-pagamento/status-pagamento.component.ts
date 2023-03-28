import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-status-pagamento',
  templateUrl: './status-pagamento.component.html',
  styleUrls: ['./status-pagamento.component.css']
})
export class StatusPagamentoComponent implements OnInit {


  constructor(private renderer: Renderer2,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const numPag = this.route.snapshot.queryParamMap.get('numPag');
    this.CarregarScriptStatusPagamento(numPag!);
  }

  CarregarScriptStatusPagamento(numPag: string) {


    const script2 = this.renderer.createElement('script');
    script2.type = 'text/javascript';
    script2.id = "1996";
    script2.text = this.GetScriptConfiguracaoPagamento(numPag);
    this.renderer.appendChild(document.body, script2);

  }

  GetScriptConfiguracaoPagamento(numPag: string): string {
    const retorno =
      `

      const mp2 = new MercadoPago('APP_USR-185bfd07-2552-4ecd-990c-0abbac069d15');

      const bricksBuilder2 = mp2.bricks();

      const renderStausScreenBrick = async (bricksBuilder2) => {
        const settings = {
          initialization: {
            paymentId:${numPag}, // id de pagamento gerado pelo Mercado Pago
          },
          callbacks: {
            onReady: () => {
              // callback chamado quando o Brick estiver pronto
            },
            onError: (error) => {
              // callback chamado para todos os casos de erro do Brick
            },
          },
        };


        try {
          await new Promise(f => setTimeout(f, 3000));
          window.statusBrickController = await bricksBuilder2.create(
            'statusScreen',
            'statuscontainerpagamento',
            settings
          );

        } catch (error) {
          await new Promise(f => setTimeout(f, 3000));
          window.statusBrickController = await bricksBuilder2.create(
            'statusScreen',
            'statuscontainerpagamento',
            settings
          );
        }

      };

      renderStausScreenBrick(bricksBuilder2);

    `;

    return retorno;
  }


}
