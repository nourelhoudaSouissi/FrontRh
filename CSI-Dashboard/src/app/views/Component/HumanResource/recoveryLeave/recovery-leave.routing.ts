import { Routes } from '@angular/router';
import { ListRecoveryLeaveComponent } from './list-recovery-leave/list-recovery-leave.component';
import { ViewRecoveryLeaceComponent } from './view-recovery-leace/view-recovery-leace.component';


export const RecoveryLeaveRoutes: Routes = [
  { 
    path: 'recoveryLeave-crud', 
    component: ListRecoveryLeaveComponent, 
    data: { title: 'Récupération', breadcrumb: 'Récupération' } 
  },
  {
    path: 'view-recoveryLeave',
    component: ViewRecoveryLeaceComponent,
    data: { title: 'Table', breadcrumb: 'Table' }
  }

];
