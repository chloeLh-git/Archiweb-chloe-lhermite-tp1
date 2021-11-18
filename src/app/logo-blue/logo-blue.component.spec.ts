import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBlueComponent } from './logo-blue.component';

describe('LogoBlueComponent', () => {
  let component: LogoBlueComponent;
  let fixture: ComponentFixture<LogoBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
