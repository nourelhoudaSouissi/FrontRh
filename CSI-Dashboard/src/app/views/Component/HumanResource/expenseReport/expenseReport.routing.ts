import { Routes } from '@angular/router';
import { ListExpenseReportComponent } from './list-expense-report/list-expense-report.component';
import { ViewExpenseReportComponent } from './view-expense-report/view-expense-report.component';



export const ExpenseReportRoutes: Routes = [
  { 
    path: 'expenseReport-crud', 
    component: ListExpenseReportComponent, 
    data: { title: 'Congé', breadcrumb: 'Congé' } 
  },
{
    path: ":iiid",
    component: ViewExpenseReportComponent ,
    pathMatch: "full"
  }
];
