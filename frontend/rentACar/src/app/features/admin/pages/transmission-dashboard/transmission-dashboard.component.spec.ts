import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionDashboardComponent } from './transmission-dashboard.component';

describe('TransmissionDashboardComponent', () => {
  let component: TransmissionDashboardComponent;
  let fixture: ComponentFixture<TransmissionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissionDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
