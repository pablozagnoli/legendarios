import { Component, OnInit } from '@angular/core';
import { CadatroSenderitasServiceService } from '../../services/cadatro-senderitas-service.service';

@Component({
  selector: 'app-first-steep',
  templateUrl: './first-steep.component.html',
  styleUrls: ['./first-steep.component.css']
})
export class FirstSteepComponent implements OnInit {
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


  constructor(readonly cadatroSenderitasServiceService: CadatroSenderitasServiceService) { }

  formGroup = this.cadatroSenderitasServiceService.firstStepForm;

  ngOnInit(): void {
    // this.stepperControllerValueChanges();
    this.cadatroSenderitasServiceService.cadastrarNovoSenderista$.next(true);
  }

  stepperControllerValueChanges() {
    this.formGroup.statusChanges.subscribe((status: string) => {
      const mappedTypes = Object.entries(this.formGroup.controls)
        .map(([key, value]) => {
          return { name: key, status: value.status };
        })
        .filter((item) => item.name !== "codigo")
        .filter((item) => item.name !== "percdif")
        .filter((item) => item.status === "INVALID");

      this.cadatroSenderitasServiceService.cadastrarNovoSenderista$.next(true);
      if (mappedTypes.length === 0) {
        this.cadatroSenderitasServiceService.cadastrarNovoSenderista$.next(false);
      }
    });
  }

}
