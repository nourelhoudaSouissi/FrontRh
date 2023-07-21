import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpenseReportComponent } from './create-expense-report.component';

describe('CreateExpenseReportComponent', () => {
  let component: CreateExpenseReportComponent;
  let fixture: ComponentFixture<CreateExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpenseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
