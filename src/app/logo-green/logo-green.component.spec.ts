import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGreenComponent } from './logo-green.component';

describe('LogoGreenComponent', () => {
  let component: LogoGreenComponent;
  let fixture: ComponentFixture<LogoGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
