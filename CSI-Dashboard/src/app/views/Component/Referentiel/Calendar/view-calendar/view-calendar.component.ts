import { Component, OnInit, Inject } from '@angular/core';
import { Calendar } from 'app/shared/models/calendar';
import { CalendarService } from '../calendar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { WeekendUpdated } from 'app/shared/models/weekendUpdated';
import { Holiday } from 'app/shared/models/holiday';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {
 
  public calendar : Calendar;
  public id : number;

  public displayedColumnsWeekends: any;
  public displayedColumnsHolidays: any;

  public dataSourceWeekends: MatTableDataSource<WeekendUpdated>;
  public dataSourceHolidays: MatTableDataSource<Holiday>;

  public weekends : WeekendUpdated[];
  public holidays : Holiday[];     

  constructor(
    private calendarService : CalendarService,
    private dialog: MatDialogRef<ViewCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private route : ActivatedRoute) { 
      this.dataSourceWeekends = new MatTableDataSource<WeekendUpdated>([]);
      this.dataSourceHolidays = new MatTableDataSource<Holiday>([]);
    }


    getDisplayedColumnsHolidays() {
      return ['number','name','startDate','endDate','duration'];
    }
    getDisplayedColumnsWeekends() {
      return ['number','name','startDay','endDay','activationStartDate', 'activationEndDate'];
    }

   
    ngOnInit(): void {
      const data = this.data;
      this.calendar= data.calendar;
      this.displayedColumnsHolidays=this.getDisplayedColumnsHolidays();
      this.displayedColumnsWeekends=this.getDisplayedColumnsWeekends();
    }

    closeDialog(): void {
          this.dialog.close();
    }

    getHolidays() {
      this.calendarService.getItemHolidays(this.id).subscribe((data: any) => {
        this.dataSourceHolidays = data;
      });
    }
    getWeekend() {
      this.calendarService.getItemWeekends(this.id).subscribe((data: any) => {
        this.dataSourceWeekends = data;
      });
    }
}
