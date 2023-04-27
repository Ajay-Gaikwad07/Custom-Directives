import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodComponent } from './demod.component';

describe('DemodComponent', () => {
  let component: DemodComponent;
  let fixture: ComponentFixture<DemodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
