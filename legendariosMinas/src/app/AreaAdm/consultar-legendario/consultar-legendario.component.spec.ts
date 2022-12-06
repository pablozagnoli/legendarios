import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLegendarioComponent } from './consultar-legendario.component';

describe('ConsultarLegendarioComponent', () => {
  let component: ConsultarLegendarioComponent;
  let fixture: ComponentFixture<ConsultarLegendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarLegendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarLegendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
