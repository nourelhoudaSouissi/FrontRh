import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Holiday } from 'app/shared/models/holiday';
import { WeekendService } from '../../Weekend/weekend.service';
import { DayOfWeek, Weekend } from 'app/shared/models/weekend';
import { WeekendUpdated } from 'app/shared/models/weekendUpdated';

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
  Weekend: Weekend[] = [];
  weekendUpdated: WeekendUpdated[] = [];
  public itemForm: FormGroup;
  public myHolidayForm: FormGroup;
  holidays: FormArray;
  weekendUpdateds:FormArray;
  repeatForm: FormGroup;
  repeatFormUpdated: FormGroup;
  public showHolidaysForm: boolean = false;
  public showWeekendsForm: boolean = false;

  dayOfWeek= Object.values(DayOfWeek)

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private _formBuilderUpdated: FormBuilder,
    private weekendService: WeekendService,
    public dialogRef: MatDialogRef<CreateCalendarComponent>,
    private fb: FormBuilder,
    private fbWeekend: FormBuilder
  ) { }

  buildItemForm(item) {
    this.itemForm = this.fb.group({
    
      name: [item.name || '', Validators.required],
      reference :[item.reference|| '', Validators.required],
      description: [item.description || ''],
      holidays: this.fb.array([]), // Initialize holidays as an empty FormArray
      weekendUpdateds: this.fbWeekend.array([])
    });

    const holidaysFormArray = this.itemForm.get('holidays') as FormArray;
    const weekendsFormArray = this.itemForm.get('weekendUpdateds') as FormArray;
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
    if (item.weekendUpdateds && item.weekendUpdateds.length > 0) {
      item.weekendUpdateds.forEach((weekend) => {
        weekendsFormArray.push(this.fbWeekend.group({
          id: [weekend.id || ''],
          reference: [{ value: weekend.reference || '', disabled: true }],
          name: [weekend.name || ''],
          startDay: [weekend.startDay || ''],
          endDay: [weekend.endDay || ''],
          activationStartDate: [weekend.activationStartDate || ''],
          activationEndDate: [weekend.activationEndDate || ''],
        }));
      });
    } else {
      weekendsFormArray.push(this.fbWeekend.group({
        id: [''],
        reference: [''],
        name: [''],
        startDay: [''],
        endDay: [''],
        activationStartDate: [''],
        activationEndDate: ['']
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
/* **************************** Weekend repeat Form ************************** */

    this.weekendService.getItems().subscribe((weekendUpdateds: any[]) => {
      this.weekendUpdated = weekendUpdateds;
    });

    this.getWeekendId();

    this.repeatFormUpdated = this.fb.group({
      repeatArrayUpdated: this.fb.array([this.createRepeatFormUpdated()])
    });

  }

  get myArrayControls() {
    return (this.myHolidayForm.get('holidays') as FormArray).controls;
  }

  createRepeatForm(): FormGroup {
    return this._formBuilder.group({});
  }


  createRepeatFormUpdated(): FormGroup {
    return this._formBuilderUpdated.group({});
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

  getWeekendId(){
    this.weekendService.getItems().subscribe((data :any )=>{
      this.Weekend = data
    });
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
  

      /* **************************** Weekend repeat Form add and remove **************************** */

      addWeekendFormGroup(): void {
        const weekendsFormArray = this.itemForm.get('weekendUpdateds') as FormArray;
        weekendsFormArray.push(this.fbWeekend.group({
          id: [''],
          reference: [''],
          name: [''],
          startDay: [''],
          endDay: [''],
          activationStartDate: [''],
          activationEndDate: ['']
        }));
      }
   
      toggleWeekendForm(): void {
        const weekendsFormArray = this.itemForm.get('weekendUpdateds') as FormArray;
        if (weekendsFormArray.length === 0) {
          this.addWeekendFormGroup();
        }
        this.showWeekendsForm = true; // Always set showWeekendsForm to true
      }
      
        
      removeWeekendFormGroup(index: number): void {
        const weekendFormArray = this.itemForm.get('weekendUpdateds') as FormArray;
        weekendFormArray.removeAt(index);
      }

      get myWeekendArrayControls() {
        return (this.myHolidayForm.get('weekendUpdateds') as FormArray).controls;
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
    
      /* **************************** On select change weekend **************************** */


    onWeekendSelectedChange(value: any, i: number): void {
        const weekendsFormArray = this.itemForm.get('weekendUpdateds') as FormArray;
        const weekendGroup = weekendsFormArray.at(i);
        if (weekendGroup) {
          const reference = weekendGroup.get('reference');
          const name = weekendGroup.get('name');
          const startDay = weekendGroup.get('startDay');
          const endDay = weekendGroup.get('endDay');
          if (reference  && endDay && startDay) {
            const selectedWeekend = this.Weekend.find(weekend => weekend.name === value);
            reference.setValue(selectedWeekend ? selectedWeekend.reference : '');
            startDay.setValue(selectedWeekend ? selectedWeekend.startDay : '');
            endDay.setValue(selectedWeekend ? selectedWeekend.endDay : '');
            name.setValue(selectedWeekend ? selectedWeekend.name : '');
          }
        }
      }
    
      

      }
