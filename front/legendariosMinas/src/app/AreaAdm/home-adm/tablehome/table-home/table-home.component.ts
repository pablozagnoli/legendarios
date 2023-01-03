import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { legendarios } from '../../Model/legendariosModel';
import { HomeAdmService } from '../../service/home-adm.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.scss']
})
export class TableHomeComponent implements OnInit {
  @Input("legendarios") listaDadosLegendarios: legendarios[] = [];

  NameLegendario = new FormControl();
  NumeroLegendario = new FormControl();

  pagina: number = 10;
  paginaatual: number | undefined;
  ultimapagina: number | undefined;
  totaldeorcamentospararetornar: number | undefined = 10;
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

  FormDadosLabels = {
    NumeroLegendario: "Nome",
    NomeLegendario: "Numero Legendario",
  };

  constructor(private serviceHomeAdm: HomeAdmService) { }

  ngOnInit(): void {
    this.filtroGridLegendariosHome();
    this.carregarDadosLegendarios();
  }

  onClickGridItenDadosTecnicos(event: any, element: any, testo: string) {

  }

  PaginatorhandlePageEvent(event: any) {
    console.log(event)

    this.pagina = event.pageSize; //quantidade por pagina
    this.paginaatual = event.pageIndex; //pagina atual
    this.ultimapagina = event.previousPageIndex; //ultima pagina

    // this.carregarMaisOrcamentos();
  }

  filtroGridLegendariosHome() {

    this.NameLegendario.valueChanges.subscribe((value) => {
      this.carregarDadosLegendariosFiltrado(this.NameLegendario.value,  this.NumeroLegendario.value)
    })

    this.NumeroLegendario.valueChanges.subscribe((value) => {
      this.carregarDadosLegendariosFiltrado(this.NameLegendario.value,  this.NumeroLegendario.value)
    })
  }

  carregarDadosLegendarios() {

    let param = {
      nomelegendario: '',
      codigolegendario: 0
    }

    this.serviceHomeAdm.getTodosLegendarios(param).subscribe((resultado) => {
      this.listaDadosLegendarios = resultado
    });
    console.log(this.listaDadosLegendarios);
  }

  carregarDadosLegendariosFiltrado(nomelegendario: string, codigolegendario: number) {

    let param = {
      nomelegendario: nomelegendario,
      codigolegendario: codigolegendario
    }

    this.serviceHomeAdm.getTodosLegendarios(param).subscribe((resultado) => {
      this.listaDadosLegendarios = resultado
    });
    console.log(this.listaDadosLegendarios);
  }

}
