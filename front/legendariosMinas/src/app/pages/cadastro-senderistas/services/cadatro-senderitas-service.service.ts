import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ORCAMENTO_FORM } from '../constants/cadastrar-legendario-form';
import { FIRST_STEP_FORM, SECOND_STEP_FORM, THIRD_STEP_FORM } from '../constants/first-steep-form';

@Injectable({
  providedIn: 'root'
})
export class CadatroSenderitasServiceService {
  cadastrarNovoSenderista$ = new BehaviorSubject<boolean>(true);


  constructor(readonly formBuilder: FormBuilder,) { }

  firstStepForm = this.formBuilder.group(FIRST_STEP_FORM);
  secondStepForm = this.formBuilder.group(SECOND_STEP_FORM);
  thirdStepForm = this.formBuilder.group(THIRD_STEP_FORM);
  orcamentoForm = this.formBuilder.group(ORCAMENTO_FORM);
}
