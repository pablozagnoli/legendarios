import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  exibRodape = true;

  ngOnInit(): void {
    this.exibRodape = sessionStorage.getItem("ExibeRodape")! == "1";
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];



  private onClick() {

  }

}
