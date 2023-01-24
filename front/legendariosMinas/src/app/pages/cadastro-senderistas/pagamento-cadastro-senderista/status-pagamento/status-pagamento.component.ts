import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-pagamento',
  templateUrl: './status-pagamento.component.html',
  styleUrls: ['./status-pagamento.component.css']
})
export class StatusPagamentoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.reloacPage();

  }

  reloacPage() {
    if (sessionStorage.getItem("recarregarstatuspagamento") == "1") {
      sessionStorage.setItem("recarregarstatuspagamento", "0");
      location.reload();
    }
  }

}
