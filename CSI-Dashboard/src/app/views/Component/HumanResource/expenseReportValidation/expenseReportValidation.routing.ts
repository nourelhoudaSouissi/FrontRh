import { Routes } from '@angular/router';
import { List } from 'echarts';
import { ListExpenseReportValidationComponent } from './list-expense-report-validation/list-expense-report-validation.component';
import { ViewExpenseReportValidationComponent } from './view-expense-report-validation/view-expense-report-validation.component';


export const ExpenseReportValidationRoutes: Routes = [
  { 
    path: 'expenseReportValidation-crud', 
    component: ListExpenseReportValidationComponent, 
    data: { title: 'Congé', breadcrumb: 'Congé' } 
  },
{
    path: ":iiid",
    component: ViewExpenseReportValidationComponent ,
    pathMatch: "full"
  }
];
