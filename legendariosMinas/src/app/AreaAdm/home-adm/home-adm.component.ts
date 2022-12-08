import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css']
})
export class HomeAdmComponent implements OnInit {

  categories: string[] = ['teste3', 'teste2'];

  series = [
    { label: 'Legendários', data: 100 },
    { label: 'Senderistas', data: 10 },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
