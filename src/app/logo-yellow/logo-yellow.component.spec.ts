import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYellowComponent } from './logo-yellow.component';

describe('LogoYellowComponent', () => {
  let component: LogoYellowComponent;
  let fixture: ComponentFixture<LogoYellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoYellowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
