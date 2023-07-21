import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenseReportComponent } from './list-expense-report.component';

describe('ListExpenseReportComponent', () => {
  let component: ListExpenseReportComponent;
  let fixture: ComponentFixture<ListExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpenseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
