import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { legendarios } from './Model/legendariosModel';
import { HomeAdmService } from './service/home-adm.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.scss']
})
export class HomeAdmComponent implements OnInit {
  pagina: number = 10;
  paginaatual: number | undefined;
  ultimapagina: number | undefined;
  totaldeorcamentospararetornar: number | undefined = 10;
  listaDadosLegendarios: legendarios[] = [];



  categories: string[] = ['teste3', 'teste2'];

  series = [
    { label: 'Legendários', data: 100 },
    { label: 'Senderistas', data: 10 },
  ];


  constructor(private serviceHomeAdm: HomeAdmService,
    private router: Router) { }

  ngOnInit(): void {
    this.VerficarAutenticacao();
  }

  onClickGridItenDadosTecnicos(event: any, element: any, testo: string) {

  }

  VerficarAutenticacao() {
    let login = JSON.parse(sessionStorage.getItem('PO_USER_LOGIN')!);

    let resultadoComparacao = this.VericaAsDatasDoToken(login);

    if (resultadoComparacao) {

      this.router.navigate(["login-adm"], {
      });
    }
  }

  VericaAsDatasDoToken(login: any) {

    var dataLogin = new Date(login.dt_acesso);
    var dataLogin = new Date();

    var diferencaEmMilissegundos = dataLogin.getTime() - dataLogin.getTime();

    if (diferencaEmMilissegundos < 900000) { // 15 minutos em milissegundos
      return true;
    } else {
      return false;
    }
  }

}
