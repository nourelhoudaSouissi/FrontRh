import { Component, OnInit, Inject } from '@angular/core';
import { Calendar } from 'app/shared/models/calendar';
import { CalendarService } from '../calendar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {
 
  public calendar : Calendar;
  public id : number;

  constructor(
    private calendarService : CalendarService,
    private dialog: MatDialogRef<ViewCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private route : ActivatedRoute) { }

    ngOnInit(): void {
      const data = this.data;
      this.calendar= data.calendar;
    }

    closeDialog(): void {
          this.dialog.close();
    }
}
