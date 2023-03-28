import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css'],
})
export class LoginAdmComponent implements OnInit {
  private BASEURL = `${environment.baseURL}`;

  constructor() {}

  //urlLogin = "https://localhost:5001/adm-login"

  urlLogin = `${this.BASEURL}adm-login`;

  ngOnInit(): void {
    sessionStorage.setItem('ExibeRodape', '0');
  }
}
