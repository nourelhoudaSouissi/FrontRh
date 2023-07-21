import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenseReportComponent } from './view-expense-report.component';

describe('ViewExpenseReportComponent', () => {
  let component: ViewExpenseReportComponent;
  let fixture: ComponentFixture<ViewExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpenseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
