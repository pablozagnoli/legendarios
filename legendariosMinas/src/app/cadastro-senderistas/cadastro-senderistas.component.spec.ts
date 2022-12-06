import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSenderistasComponent } from './cadastro-senderistas.component';

describe('CadastroSenderistasComponent', () => {
  let component: CadastroSenderistasComponent;
  let fixture: ComponentFixture<CadastroSenderistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSenderistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSenderistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
