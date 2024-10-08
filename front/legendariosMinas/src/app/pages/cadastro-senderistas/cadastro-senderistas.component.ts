import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
} from '@po-ui/ng-components';
import { HomeAdmService } from '../AreaAdm/home-adm/service/home-adm.service';
import { CadatroSenderitasServiceService } from './services/cadatro-senderitas-service.service';

@Component({
  selector: 'app-cadastro-senderistas',
  templateUrl: './cadastro-senderistas.component.html',
  styleUrls: ['./cadastro-senderistas.component.scss'],
})
export class CadastroSenderistasComponent implements OnInit {

  formGroup = this.cadatroSenderitasServiceService.firstStepForm;

  verificaForm = false;

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

  termoParticipacao = ""

  constructor(public poNotification: PoNotificationService,
    readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private serviceHomeAdm: HomeAdmService) { }

  ngOnInit() {
    this.buscarCep();
  }

  mercadoIntegrate() {

  }

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



  pagamento() {
    let urlPagamento = "";
    this.serviceHomeAdm.getUrlPagameto().subscribe({
      next(result: string) {
        urlPagamento = result;
      },
      error(result) {

        urlPagamento = result.error.text;
        window.open(urlPagamento);

      }
    }
    )


    //this.router.navigate([urlPagamento]);
  }

  concluirCadastro() {
    this.verificaForm = true;

    if (!this.formGroup.controls['termoizencaorespmedicaradio'].getError('required')) {
      this.router.navigate(["pagamento-senderista"], {
        queryParams: {
          numPag: 0,
        },
      });
    } else {
      alert("EXISTEM CAMPOS A SEREM PREENCHIDOS")
    }

  }

  buscarCep() {
    this.formGroup.controls['cep'].valueChanges.subscribe((value) => {
      this.serviceHomeAdm.getCepViaCep(value!).subscribe((result) => {

        this.formGroup.controls['address'].setValue(result.logradouro);
        this.formGroup.controls['state'].setValue(result.uf);
        this.formGroup.controls['cidade'].setValue(result.localidade);
        this.formGroup.controls['country'].setValue("Brasil");

      })
    })
  }
}
