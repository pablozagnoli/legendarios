import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { legendarios } from '../Model/legendariosModel';
import { HomeAdmService } from '../service/home-adm.service';

@Component({
  selector: 'app-editar-legendario',
  templateUrl: './editar-legendario.component.html',
  styleUrls: ['./editar-legendario.component.css']
})
export class EditarLegendarioComponent implements OnInit {
  numLegendario: string | undefined;
  dadosLegendario: legendarios | undefined;

  n_lgnd = new FormControl();
  nome = new FormControl();
  rec = new FormControl();
  email = new FormControl();
  celular = new FormControl();
  cadastro_pessoa = new FormControl();
  data_de_nascimento = new FormControl();
  estado_civil = new FormControl();
  profissao = new FormControl();
  tipo_sanguineo = new FormControl();
  religiao = new FormControl();
  igreja = new FormControl();
  e_batizado = new FormControl();
  frequanta_celula = new FormControl();
  rede = new FormControl();
  e_lider_de_celula = new FormControl();
  ativo = new FormControl();
  deletado = new FormControl();

  constructor(private route: ActivatedRoute,
              private serviceHomeAdm: HomeAdmService) { }

  ngOnInit(): void {
    this.getNumLegendário();
  }

  getNumLegendário() {
    this.route.params.subscribe(params =>
      this.numLegendario = params['numLegendario']);

    this.getDadosLegendario();
  }

  getDadosLegendario(){
    this.serviceHomeAdm.getLegendario( this.numLegendario! ).subscribe((resultado) => {
      this.dadosLegendario = resultado;
      this.inicilizaForm();
    });

  }

  inicilizaForm(){
    this.n_lgnd.setValue(this.dadosLegendario?.n_lgnd);
    this.nome.setValue(this.dadosLegendario?.nome);
    this.rec.setValue(this.dadosLegendario?.rec);
    this.email.setValue(this.dadosLegendario?.email);
    this.celular.setValue(this.dadosLegendario?.celular);
    this.cadastro_pessoa.setValue(this.dadosLegendario?.cadastro_pessoa);
    this.data_de_nascimento.setValue(this.dadosLegendario?.data_de_nascimento);
    this.estado_civil.setValue(this.dadosLegendario?.estado_civil);
    this.profissao.setValue(this.dadosLegendario?.profissao);
    this.tipo_sanguineo.setValue(this.dadosLegendario?.tipo_sanguineo);
    this.religiao.setValue(this.dadosLegendario?.religiao);
    this.igreja.setValue(this.dadosLegendario?.igreja);
    this.e_batizado.setValue(this.dadosLegendario?.e_batizado);
    this.frequanta_celula.setValue(this.dadosLegendario?.frequanta_celula);
    this.rede.setValue(this.dadosLegendario?.rede);
    this.e_lider_de_celula.setValue(this.dadosLegendario?.e_lider_de_celula);
    this.ativo.setValue(this.dadosLegendario?.ativo);
    this.deletado.setValue(this.dadosLegendario?.deletado);

    sessionStorage.setItem("numLegendario","")
  }

}
