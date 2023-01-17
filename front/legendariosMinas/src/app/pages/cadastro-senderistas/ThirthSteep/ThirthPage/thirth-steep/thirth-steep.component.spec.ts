import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirthSteepComponent } from './thirth-steep.component';

describe('ThirthSteepComponent', () => {
  let component: ThirthSteepComponent;
  let fixture: ComponentFixture<ThirthSteepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirthSteepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirthSteepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
