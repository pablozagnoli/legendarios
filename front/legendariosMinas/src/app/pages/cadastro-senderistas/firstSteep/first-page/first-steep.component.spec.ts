import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSteepComponent } from './first-steep.component';

describe('FirstSteepComponent', () => {
  let component: FirstSteepComponent;
  let fixture: ComponentFixture<FirstSteepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSteepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSteepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
