import { Routes } from '@angular/router';
import { ListTimeOffComponent } from './list-time-off/list-time-off.component';
import { ViewTimeOffComponent } from './view-time-off/view-time-off.component';


export const TimeOffRoutes: Routes = [
  { 
    path: 'timeOff-crud', 
    component: ListTimeOffComponent, 
    data: { title: 'Congé', breadcrumb: 'Congé' } 
  },
{
    path: ":iiid",
    component: ViewTimeOffComponent ,
    pathMatch: "full"
  }
];
