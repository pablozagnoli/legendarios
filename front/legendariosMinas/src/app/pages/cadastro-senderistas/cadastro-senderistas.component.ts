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
  styleUrls: ['./cadastro-senderistas.component.css'],
})
export class CadastroSenderistasComponent implements OnInit {

  formGroup = this.cadatroSenderitasServiceService.firstStepForm;

  myGroup = new FormGroup({
    nomecompleto: new FormControl( ["", [Validators.required]]),
    email: new FormControl( ["", [Validators.required]]),
    cpf: new FormControl(["", [Validators.required]]),
    rg: new FormControl(["", [Validators.required]]),
    dataespedicaorg: new FormControl(["", [Validators.required]]),
    rgespedidopor: new FormControl(["", [Validators.required]]),
    datanascimento: new FormControl(["",[Validators.required]]),
    idade: new FormControl(["", [Validators.required]]),
    celular: new FormControl(["", [Validators.required]]),
    nacionalidade: new FormControl(["", [Validators.required]]),
    address: new FormControl(["", [Validators.required]]),
    country: new FormControl(["", [Validators.required]]),
    state: new FormControl(["",[Validators.required]]),
    cidade: new FormControl(["", [Validators.required]]),
    cep: new FormControl(["", [Validators.required]]),
    profissao: new FormControl(["", [Validators.required]]),
    religiao: new FormControl(["", [Validators.required]]),
    civilstate: new FormControl(["", [Validators.required]]),
    temfilhos: new FormControl(["", [Validators.required]]),
    usamedicacao: new FormControl(["", [Validators.required]]),
    igreja: new FormControl(["", [Validators.required]]),
    qualredepertence: new FormControl(["", [Validators.required]]),
    numdacamisa: new FormControl(["", [Validators.required]]),
    conveniomedico: new FormControl(["", [Validators.required]]),
    frequentacelula: new FormControl(["", [Validators.required]]),
    liderdecelula: new FormControl(["",[Validators.required]]),
    nomecontatoemergencia1: new FormControl(["", [Validators.required]]),
    numerocontatoemergencia1: new FormControl(["", [Validators.required]]),
    nomecontatoemergencia2: new FormControl(["", [Validators.required]]),
    numerocontatoemergencia2: new FormControl(["", [Validators.required]]),
    medicofamilia: new FormControl(["", [Validators.required]]),
    telmedicofamilia: new FormControl(["", [Validators.required]]),
    nomeconveniomedico: new FormControl(["", [Validators.required]]),
    possuisegurodevida: new FormControl(["", [Validators.required]]),
    empresasegurodevida: new FormControl(["", [Validators.required]]),
    numeroopolicesegurodevida: new FormControl(["", [Validators.required]]),
    tiposanguineo: new FormControl(["", [Validators.required]]),
    possuiasdoencasabaixo: new FormControl(["", [Validators.required]]),
    semarcoupossuiasdoencasabaixo: new FormControl(["", [Validators.required]]),
    temoutroproblemasaude: new FormControl(["", [Validators.required]]),
    usamedicamentoqual: new FormControl(["", [Validators.required]]),
    porrazoesmedicasdietaespecial: new FormControl(["", [Validators.required]]),
    termoizencaorespmedica: new FormControl(["", [Validators.required]]),
    termoizencaorespmedicaradio: new FormControl(["", [Validators.required]]),
    politicacancelamento: new FormControl( ["", [Validators.required]]),
    politicacancelamentoradio: new FormControl(["", [Validators.required]]),
    declaracaoinfoverdadeiras: new FormControl(["", [Validators.required]]),
    declaracaoinfoverdadeirasradio: new FormControl(["", [Validators.required]]),
  });

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
    alert(this.formGroup.get('nomecompleto')?.value)
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
}
