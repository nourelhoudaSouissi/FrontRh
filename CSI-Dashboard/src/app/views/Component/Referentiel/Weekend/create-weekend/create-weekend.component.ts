import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DayOfWeek } from 'app/shared/models/weekend';

@Component({
  selector: 'app-create-weekend',
  templateUrl: './create-weekend.component.html',
  styleUrls: ['./create-weekend.component.scss']
})
export class CreateWeekendComponent implements OnInit {

  public itemForm: FormGroup
  dayOfWeek= Object.values(DayOfWeek)
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateWeekendComponent>,
    private fb: FormBuilder
  ) { }

  buildItemForm(item){
    this.itemForm = this.fb.group({
      reference : [item.reference || '', Validators.required],
      name : [item.name || ''],
      startDay : [item.startDay || ''],
      endDay : [item.endDay || '']
    })
  }


  ngOnInit(): void {
    this.buildItemForm(this.data.payload)
  }


  submit() {
    console.log(this.itemForm.value)
    this.dialogRef.close(this.itemForm.value)
  }
 
  

  dayOfWeekMap = {
    [DayOfWeek.MONDAY]:'Lundi',
    [DayOfWeek.TUESDAY]:'Mardi',
    [DayOfWeek.WEDNESDAY]:'Mercredi',
    [DayOfWeek.THURSDAY]:'Jeudi',
    [DayOfWeek.FRIDAY]:'Vendredi',
    [DayOfWeek.SATURDAY]:'Samedi',
    [DayOfWeek.SUNDAY]:'Dimanche'
    
  };


}
