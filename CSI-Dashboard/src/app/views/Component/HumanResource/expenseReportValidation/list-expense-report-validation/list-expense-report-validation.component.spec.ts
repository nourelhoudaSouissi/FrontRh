import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenseReportValidationComponent } from './list-expense-report-validation.component';

describe('ListExpenseReportValidationComponent', () => {
  let component: ListExpenseReportValidationComponent;
  let fixture: ComponentFixture<ListExpenseReportValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpenseReportValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExpenseReportValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
