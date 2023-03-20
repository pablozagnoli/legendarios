import { Component, OnInit } from '@angular/core';
import { PoPageLoginAuthenticationType, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css'],
})
export class LoginAdmComponent implements OnInit {

  constructor() {}

  customLiterals: PoPageLoginLiterals = {
    welcome: 'Bem vindo ao Painel ADM Legendários Minas!',
  };

  urlLogin = "https://localhost:5001/adm-login"

  tipoAutenticacao = PoPageLoginAuthenticationType.Bearer;

  ngOnInit(): void {
    sessionStorage.setItem('ExibeRodape', '0');
  }
}
