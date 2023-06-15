import { Routes } from '@angular/router';
import { ListRecoveryValidationComponent } from './list-recovery-validation/list-recovery-validation.component';



export const RecoveryValidationRoutes: Routes = [
  { 
    path: 'recoveryValidation-crud', 
    component: ListRecoveryValidationComponent, 
    data: { title: 'Validation Récupération', breadcrumb: 'Validation Récupération' } 
  },

];
