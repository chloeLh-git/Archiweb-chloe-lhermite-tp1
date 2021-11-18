import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRedComponent } from './logo-red.component';

describe('LogoRedComponent', () => {
  let component: LogoRedComponent;
  let fixture: ComponentFixture<LogoRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoRedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
