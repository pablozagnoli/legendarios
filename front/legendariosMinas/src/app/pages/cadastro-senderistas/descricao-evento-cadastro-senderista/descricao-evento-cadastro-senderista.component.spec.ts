import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoEventoCadastroSenderistaComponent } from './descricao-evento-cadastro-senderista.component';

describe('DescricaoEventoCadastroSenderistaComponent', () => {
  let component: DescricaoEventoCadastroSenderistaComponent;
  let fixture: ComponentFixture<DescricaoEventoCadastroSenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoEventoCadastroSenderistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoEventoCadastroSenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
