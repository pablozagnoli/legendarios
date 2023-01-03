import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLegendarioComponent } from './editar-legendario.component';

describe('EditarLegendarioComponent', () => {
  let component: EditarLegendarioComponent;
  let fixture: ComponentFixture<EditarLegendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLegendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLegendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
