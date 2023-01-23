import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ORCAMENTO_FORM } from '../constants/cadastrar-legendario-form';
import { FIRST_STEP_FORM, PAGAMENTO_FORM, SECOND_STEP_FORM, THIRD_STEP_FORM } from '../constants/first-steep-form';

@Injectable({
  providedIn: 'root'
})
export class CadatroSenderitasServiceService {
  private BASEURL = `${environment.baseURL}`;
  cadastrarNovoSenderista$ = new BehaviorSubject<boolean>(true);
  firstStepForm = this.formBuilder.group(FIRST_STEP_FORM);
  pagamentoForm = this.formBuilder.group(PAGAMENTO_FORM);

  constructor(readonly formBuilder: FormBuilder,
    private httpcliente: HttpClient) {
    this.firstStepForm.patchValue({ nomecompleto: "pablo augusto" });
    this.pagamentoForm.patchValue({});
  }

  PostPagamento(parans: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.httpcliente.post<any>(`${this.BASEURL}pagamentos/criar-pagameto`, parans, httpOptions);
  }

  GetTokenCard(parans: any): Observable<any> {
    return this.httpcliente.post<any>("https://api.mercadopago.com/v1/card_tokens?public_key=APP_USR-185bfd07-2552-4ecd-990c-0abbac069d15", parans);
  }

}
