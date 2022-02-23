import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionAddFormComponent } from './transmission-add-form.component';

describe('TransmissionAddFormComponent', () => {
  let component: TransmissionAddFormComponent;
  let fixture: ComponentFixture<TransmissionAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissionAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
