import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
} from '@po-ui/ng-components';
import { CadatroSenderitasServiceService } from './services/cadatro-senderitas-service.service';

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
    firstName: "Nome Completo",
    lastName: "Segundo nome",
    Email: "E-mail",
    Address: "Endereço",
    Country: "Pais",
    Selecione: "Selecione...",
    ContinueChecheckoutButoon: ""
  };

  Cadastrovisivel: boolean = true;
  Textovisivel: boolean = false;

  termoParticipacao = ""

  constructor(public poNotification: PoNotificationService,
              readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService,
              private _formBuilder: FormBuilder) { }

  ngOnInit() { }

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

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  AlterarVisibilidade(){
    this.Cadastrovisivel = false;
    this.Textovisivel = true;
  }
}
