import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { legendarios, legendariosOneDTO, legendariosListDTO } from '../Model/legendariosModel';

@Injectable({
  providedIn: 'root'
})
export class HomeAdmService {
  private BASEURL = `${environment.baseURL}` + "legendarios/";
  public numLegendario: string | undefined;

  constructor(private httpcliente: HttpClient) { }

  getTodosLegendarios(param: any): Observable<legendariosListDTO> {
    return this.httpcliente.post<legendariosListDTO>(`${this.BASEURL}trazer`, param);
  }

  getLegendario(id: string): Observable<legendariosOneDTO> {
    return this.httpcliente.get<legendariosOneDTO>(`${this.BASEURL}trazer/` + id);
  }

  getUrlPagameto(): Observable<string> {
    return this.httpcliente.get<string>(`${this.BASEURL}url-compra`);
  }

  getCepViaCep(cep: string): Observable<any> {
    return this.httpcliente.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvarLegendario(param: any): Observable<legendariosOneDTO> {
    return this.httpcliente.put<legendariosOneDTO>(`${this.BASEURL}salvar-legendario`, param);
  }

  getStatusLogin(IdUsuario: string): Observable<any> {
    return this.httpcliente.get<any>(`${this.BASEURL}logado/${IdUsuario}`);
  }
}
