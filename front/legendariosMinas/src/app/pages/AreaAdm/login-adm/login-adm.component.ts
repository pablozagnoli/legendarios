import { Component, OnInit } from '@angular/core';
import { PoPageLoginAuthenticationType, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css'],
})
export class LoginAdmComponent implements OnInit {
  private BASEURL = `${environment.baseURL}`;

  constructor() {}

  customLiterals: PoPageLoginLiterals = {
    welcome: 'Bem vindo ao Painel ADM Legendários Minas!',
  };

  //urlLogin = "https://localhost:5001/adm-login"

  urlLogin = `${this.BASEURL}adm-login`;

  tipoAutenticacao = PoPageLoginAuthenticationType.Bearer;

  ngOnInit(): void {
    sessionStorage.setItem('ExibeRodape', '0');
  }
}
