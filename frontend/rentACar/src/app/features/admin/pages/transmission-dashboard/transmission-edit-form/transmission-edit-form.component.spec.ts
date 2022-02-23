import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionEditFormComponent } from './transmission-edit-form.component';

describe('TransmissionEditFormComponent', () => {
  let component: TransmissionEditFormComponent;
  let fixture: ComponentFixture<TransmissionEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissionEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
