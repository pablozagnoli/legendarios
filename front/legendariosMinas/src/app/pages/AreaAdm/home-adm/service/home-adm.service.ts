import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { legendarios } from '../Model/legendariosModel';

@Injectable({
  providedIn: 'root'
})
export class HomeAdmService {
private BASEURL = `${environment.baseURL}`+ "legendarios/";
public numLegendario: string | undefined;

  constructor(private httpcliente: HttpClient) { }

  getTodosLegendarios(param: any): Observable<legendarios[]>{
    return this.httpcliente.post<legendarios[]>(`${this.BASEURL}trazer`,param);
  }

  getLegendario(id: string): Observable<legendarios>{
    return this.httpcliente.get<legendarios>(`${this.BASEURL}trazer/` + id);
  }

  getUrlPagameto(): Observable<string>{
    return this.httpcliente.get<string>(`${this.BASEURL}url-compra`);
  }
}
