import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { legendarios } from './Model/legendariosModel';
import { HomeAdmService } from './service/home-adm.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {
  listaDadosLegendarios: legendarios[] = [];
  listaDadosLegendariosColumnsGrid = [
    "id_legendario",
    "n_lgnd",
    "nome",
    "rec",
    "email",
    "celular",
    "cadastro_pessoa",
    "data_de_nascimento",
    "estado_civil",
    "profissao",
    "tipo_sanguineo",
    "religiao",
    "igreja",
    "e_batizado",
    "frequanta_celula",
    "rede",
    "e_lider_de_celula",
    "ativo",
    "deletado"
  ];


  categories: string[] = ['teste3', 'teste2'];

  series = [
    { label: 'Legendários', data: 100 },
    { label: 'Senderistas', data: 10 },
  ];


  constructor(private serviceHomeAdm: HomeAdmService) { }

  ngOnInit(): void {
    this.serviceHomeAdm.getTodosLegendarios().subscribe((resultado) => {
      this.listaDadosLegendarios = resultado
    });
    console.log(this.listaDadosLegendarios);
  }

  onClickGridItenDadosTecnicos(event: any, element: any, testo: string){

  }

}
