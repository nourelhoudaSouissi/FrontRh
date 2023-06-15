import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.scss']
})
export class CreateHolidayComponent implements OnInit {
  public itemForm: FormGroup


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateHolidayComponent>,
    private fb: FormBuilder
  ) { }


  buildItemForm(item){
    this.itemForm = this.fb.group({
      name : [item.name || '', Validators.required],
      startDate : [item.startDate || '', Validators.required],
      endDate : [item.endDate || '', Validators.required],
      duration : [item.duration || '', Validators.required]
    })
  }


  ngOnInit(): void {
    this.buildItemForm(this.data.payload)
  }


  submit() {
    console.log(this.itemForm.value)
    this.dialogRef.close(this.itemForm.value)
  }




}
