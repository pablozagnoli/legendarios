import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { legendarios } from '../Model/legendariosModel';

@Injectable({
  providedIn: 'root'
})
export class HomeAdmService {
API: string = "https://localhost:5001/legendarios/trazer";

  constructor(private httpcliente: HttpClient) { }

  getTodosLegendarios(): Observable<legendarios[]>{
    return this.httpcliente.get<legendarios[]>(this.API);
  }
}
