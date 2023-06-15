import { Routes } from '@angular/router';
import { ListHolidayComponent } from './list-holiday/list-holiday.component';


export const HolidayRoutes: Routes = [
  { 
    path: 'holiday-crud', 
    component: ListHolidayComponent, 
    data: { title: 'Jour férié', breadcrumb: 'Jour férié' } 
  },
/*{
    path: ":iiid",
    component: ViewResourceComponent ,
    pathMatch: "full"
  }*/

 
];
