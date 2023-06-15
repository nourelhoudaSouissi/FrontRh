import { Routes } from '@angular/router';
import { ListLeaveTypeComponent } from './list-leave-type/list-leave-type.component';

export const LeaveTypeRoutes: Routes = [
  { 
    path: 'leaveType-crud', 
    component: ListLeaveTypeComponent, 
    data: { title: 'Leave Type', breadcrumb: 'Leave Type' } 
  },
/*{
    path: ":iiid",
    component: ViewResourceComponent ,
    pathMatch: "full"
  }*/

 
];
