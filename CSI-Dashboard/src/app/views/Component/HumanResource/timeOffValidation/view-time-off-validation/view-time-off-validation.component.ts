import { Component, OnInit } from '@angular/core';
import { TimeOff } from 'app/shared/models/timeOff';
import { TimeOffService } from '../../simpleTimeOff/time-off.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'app/shared/models/employee';
import { TimeOffValidationService } from '../time-off-validation.service';

@Component({
  selector: 'app-view-time-off-validation',
  templateUrl: './view-time-off-validation.component.html',
  styleUrls: ['./view-time-off-validation.component.scss']
})
export class ViewTimeOffValidationComponent implements OnInit {
  id: number;
  timeOff: TimeOff;
  employee : Employee;
  constructor(private timeOffService: TimeOffValidationService,

    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['iiid'];
    this.getTimeOffById();
   // this.getEmployee();

  } 
  getEmployee() {
    this.timeOffService.getEmployee(this.id).subscribe((data: any) =>{
      this.employee = data; });
    }

  getTimeOffById(): void {
    this.timeOffService.getItem(this.id).subscribe((dataView: any) => {
      this.timeOff = dataView;
      console.log("timeOff", this.timeOff);
      console.log("justificationDoc", this.timeOff.justificationDoc);
    });
  }

}
