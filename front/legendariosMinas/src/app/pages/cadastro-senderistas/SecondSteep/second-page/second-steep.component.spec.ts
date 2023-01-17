import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondSteepComponent } from './second-steep.component';


describe('SecondSteepComponent', () => {
  let component: SecondSteepComponent;
  let fixture: ComponentFixture<SecondSteepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSteepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSteepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
