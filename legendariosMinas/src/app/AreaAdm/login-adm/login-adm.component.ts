import { Component, OnInit } from '@angular/core';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {

  constructor() { }

  customLiterals: PoPageLoginLiterals = {
    welcome: 'Bem vindo ao Painel ADM Legendários Minas!'
  };

  ngOnInit(): void {
    sessionStorage.setItem("ExibeRodape","0");
  }

}
