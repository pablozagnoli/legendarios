import { Component, OnInit } from '@angular/core';
import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-cadastro-senderistas',
  templateUrl: './cadastro-senderistas.component.html',
  styleUrls: ['./cadastro-senderistas.component.css'],
})
export class CadastroSenderistasComponent implements OnInit {
  FormDadosLabels = {
    Rec: 'REC444',
    Titulo: 'LEGENDARIOS' + ' - ' + 'REC444',
    DataEvento: '20 out - 2022 • 12:00 > 23 out - 2022 • 21:00',
    DescricaoDoEvento: 'Evento presencial em Light Igreja, Belo Horizonte - MG',
    TituloDadosDoParticipante: 'Dados do participante',
    firstName: "Primeiro nome",
    lastName: "Segundo nome",
    Email: "E-mail",
    Address: "Endereço",
    Country: "Pais",
    Selecione: "Selecione...",
    ContinueChecheckoutButoon: ""
  };

  constructor(public poNotification: PoNotificationService) {}

  ngOnInit() {}

  onChangeFields(
    changedValue: PoDynamicFormFieldChanged
  ): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          //options: this.registerService.getCity(changedValue.value.state),
          disabled: false,
        },
      ],
    };
  }

  onLoadFields(value: any) {
    //return this.registerService.getUserDocument(value);
  }
}
