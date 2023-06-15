import { Routes } from '@angular/router';
import { ListTimeOffValidationComponent } from './list-time-off-validation/list-time-off-validation.component';



export const TimeOffValidationRoutes: Routes = [
  { 
    path: 'timeOffValidation-crud', 
    component: ListTimeOffValidationComponent, 
    data: { title: 'Validation congé', breadcrumb: 'Validation congé' } 
  },

];
