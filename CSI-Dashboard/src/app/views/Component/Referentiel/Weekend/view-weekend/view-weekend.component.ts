import { Component, OnInit, Inject} from '@angular/core';
import { Weekend } from 'app/shared/models/weekend';
import { WeekendService } from '../weekend.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-weekend',
  templateUrl: './view-weekend.component.html',
  styleUrls: ['./view-weekend.component.scss']
})
export class ViewWeekendComponent implements OnInit {
  public weekend : Weekend;
  public id : number;

  constructor(
    private weekendService :WeekendService,
    private dialog: MatDialogRef<ViewWeekendComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private route : ActivatedRoute) { }

    ngOnInit(): void {
     
      const data = this.data;
      this.weekend= data.weekend;
      console.log("weekend", this.weekend)
      console.log("weekend data", data.weekend)
   
    }

    closeDialog(): void {
          this.dialog.close();
    }

}
