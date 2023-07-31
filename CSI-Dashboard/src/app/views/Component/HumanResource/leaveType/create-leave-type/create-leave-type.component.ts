import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimeOffType } from 'app/shared/models/leaveType';
import { LeaveTypeService } from '../leave-type.service';

@Component({
  selector: 'app-create-leave-type',
  templateUrl: './create-leave-type.component.html',
  styleUrls: ['./create-leave-type.component.scss']
})
export class CreateLeaveTypeComponent implements OnInit {
  public itemForm: FormGroup
  timeOffType= Object.values(TimeOffType)

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateLeaveTypeComponent>,
    private fb: FormBuilder
  ) { }


  buildItemForm(item){
    this.itemForm = this.fb.group({
      name : [item.name || '', Validators.required],
      timeOffType : [item.timeOffType || '', Validators.required],
      duration : [item.duration || '', Validators.required],
      alertNumberDays: [item.alertNumberDays || '', Validators.required],
      description : [item.description || '', Validators.required]
    })
  }


  ngOnInit(): void {
    this.buildItemForm(this.data.payload)
  }


  submit() {
    console.log(this.itemForm.value)
    this.dialogRef.close(this.itemForm.value)
  }
  timeOffTypeMap = {
    [TimeOffType.UNPAIED_TIME_OFF]:'Congés sans solde',
    [TimeOffType.PAID_LEAVE]:'Congés payé',
    [TimeOffType.SICKNESS_LEAVE]:'Congés de maladie',
    [TimeOffType.SPECIAL_PAID_LEAVE]:'Congés spécial payé',
    [TimeOffType.OTHER]:'Autre'   
  };


}
