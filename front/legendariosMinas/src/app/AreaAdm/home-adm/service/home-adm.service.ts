import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { legendarios } from '../Model/legendariosModel';

@Injectable({
  providedIn: 'root'
})
export class HomeAdmService {
private BASEURL = `${environment.baseURL}legendarios/`;

  constructor(private httpcliente: HttpClient) { }

  getTodosLegendarios(): Observable<legendarios[]>{
    return this.httpcliente.get<legendarios[]>(`${this.BASEURL}trazer`);
  }
}
