import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    "religiao",
    "igreja",
    "e_batizado",
    "frequanta_celula",
    "edit"
  ];

  FormDadosLabels = {
    NumeroLegendario: "Numero Legendario",
    NomeLegendario: "Nome",
  };

  constructor(private serviceHomeAdm: HomeAdmService,
              private router: Router) { }

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

  editar(event: any ,numleg: any){
    console.log(numleg)

    sessionStorage.setItem("numLegendario",numleg)

    this.serviceHomeAdm.numLegendario = numleg;

    if (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
    }

    this.router.navigate(["editar-legendario"], {
      queryParams: {
        numorca: numleg,
      },
    });
  }

}
