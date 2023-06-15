import { Routes } from '@angular/router';
import { ListCalendarComponent } from './list-calendar/list-calendar.component';



export const CalendarRoutes: Routes = [
  { 
    path: 'calendar-crud', 
    component: ListCalendarComponent, 
    data: { title: 'Calendrier', breadcrumb: 'Calendrier' } 
  },

 
];
