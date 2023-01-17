import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPublicacoesComponent } from './cadastrar-publicacoes.component';

describe('CadastrarPublicacoesComponent', () => {
  let component: CadastrarPublicacoesComponent;
  let fixture: ComponentFixture<CadastrarPublicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPublicacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarPublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
