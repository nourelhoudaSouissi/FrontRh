import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Holiday } from 'app/shared/models/holiday';

@Component({
  selector: 'app-create-calendar',
  templateUrl: './create-calendar.component.html',
  styleUrls: ['./create-calendar.component.scss']
})
export class CreateCalendarComponent implements OnInit {
  public dataSource: MatTableDataSource<Holiday>;
  formHoliday = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    duration: new FormControl('')
  });

  public itemForm: FormGroup;
  public myHolidayForm: FormGroup;
  holidays: FormArray;
  repeatForm: FormGroup;
  public showHolidaysForm: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCalendarComponent>,
    private fb: FormBuilder
  ) { }

  buildItemForm(item) {
    this.itemForm = this.fb.group({
    
      name: [item.name || '', Validators.required],
      description: [item.description || ''],
      holidays: this.fb.array([]) // Initialize holidays as an empty FormArray
    });

    const holidaysFormArray = this.itemForm.get('holidays') as FormArray;
    if (item.holidays && item.holidays.length > 0) {
      item.holidays.forEach((holiday) => {
        holidaysFormArray.push(this.fb.group({
          id: [holiday.id || ''],
          name: [holiday.name || '', Validators.required],
          startDate: [holiday.startDate || '', Validators.required],
          endDate: [holiday.endDate || ''],
          duration: [holiday.duration || '']
        }));
      });
    } else {
      holidaysFormArray.push(this.fb.group({
        id: [''],
        name: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: [''],
        duration: ['']
      }));
    }
  }

  ngOnInit(): void {
    this.myHolidayForm = this._formBuilder.group({
      holidays: this._formBuilder.array([])  // Initialize holidays as an empty FormArray
    });

    this.buildItemForm(this.data.payload);

    this.repeatForm = this._formBuilder.group({
      repeatArray: this._formBuilder.array([this.createRepeatForm()])
    });
  }

  
  

  get myArrayControls() {
    return (this.myHolidayForm.get('holidays') as FormArray).controls;
  }

  createRepeatForm(): FormGroup {
    return this._formBuilder.group({});
  }

  get repeatFormGroup() {
    return this.repeatForm.get('repeatArray') as FormArray;
  }

  handleAddRepeatForm() {
    this.repeatFormGroup.push(this.createRepeatForm());
  }

  handleRemoveRepeatForm(index: number) {
    this.repeatFormGroup.removeAt(index);
    if (index > 0) {
      const repeatArray = this.repeatForm.get('repeatArray') as FormArray;
      repeatArray.removeAt(index);
    }
  }

 

      submit() {
        console.log(this.itemForm.value);
        this.dialogRef.close(this.itemForm.value);
      }
      
      addHolidayFormGroup(): void {
        const holidaysFormArray = this.itemForm.get('holidays') as FormArray;
        
        const holidayarticleFormGroup = this.fb.group({
          id: [''],
          name: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: [''],
          duration: ['']
        });
        holidaysFormArray.push(holidayarticleFormGroup);
      }


      
      removeHolidayFormGroup(index: number): void {
        const holidaysFormArray = this.itemForm.get('holidays') as FormArray;
        holidaysFormArray.removeAt(index);
      }

      toggleHolidaysForm(): void {
        const holidaysFormArray = this.itemForm.get('holidays') as FormArray;
        if (holidaysFormArray.length === 0) {
          this.addHolidayFormGroup();
        }
        this.showHolidaysForm = true; // Always set showHolidaysForm to true
      }
      
      


      }
