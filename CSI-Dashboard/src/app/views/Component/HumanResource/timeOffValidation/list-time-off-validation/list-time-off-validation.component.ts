import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Observable, Subscription } from 'rxjs';


import { RequestStatus, TimeOff } from 'app/shared/models/timeOff';
import { TimeOffValidationService } from '../time-off-validation.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-time-off-validation',
  templateUrl: './list-time-off-validation.component.html',
  styleUrls: ['./list-time-off-validation.component.scss']
})
export class ListTimeOffValidationComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  public dataSource:MatTableDataSource<TimeOff>;
  public displayedColumns: any;
  public getItemSub: Subscription;
  requestStatus :any= Object.values(RequestStatus);
  private datePipe: DatePipe

  constructor(
    
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private timeOffValidationService: TimeOffValidationService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService
  ) {     this.dataSource = new MatTableDataSource<TimeOff>([]);}


  
  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.getItems();
   
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
  }

  getDisplayedColumns() {
    return ['leaveTypeName','leaveType', 'startDate','endDate', 'requestStatus',  'requestInputDate','actions'];
  }
  
  getItems() {    
    this.getItemSub = this.timeOffValidationService.getItems()
      .subscribe((data:any)  => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

  }

  getStatusColor(requestStatus: string): { color: string, displayText: string } {
    const STATUS_DATA = {
      VALIDATED: { color: 'primary', displayText: 'Validé' },
      REJECTED: { color: 'red', displayText: 'Refusé' },
      PENDING: { color: 'gray', displayText: 'En cour' }
    };
    return STATUS_DATA[requestStatus] || { color: 'gray', displayText: 'En Cour' };
  }


  getLeaveType(timeOffType: string): { displayText: string } {
    const TIME_OFF_DATA = {
      
      PAID_LEAVE: {  displayText: 'Payé' },
      SPECIAL_PAID_LEAVE: { displayText: 'Spécial payé' },
      UNPAIED_TIME_OFF: { displayText: 'Sans Solde' },
      SICKNESS_LEAVE: { displayText: 'Maladie' },
      OTHER: { displayText: 'Autre' }
    
    };
    return TIME_OFF_DATA[timeOffType];
  }

changeOffereStatus(requestStatus: string, timeOffId: number): void {
    console.log('Changing offer status to:', requestStatus);
    let updateObservable: Observable<any>;
    switch (requestStatus) {
      case 'requestStatus.VALIDATED':
        updateObservable = this.timeOffValidationService.updateStatusToValidatedById(timeOffId);
        this.getItems();
        break;
      case 'requestStatus.REJECTED':
        updateObservable = this.timeOffValidationService.updateStatusToRejectedById(timeOffId);
        this.getItems();
        break;
      
      default:
        // Cas de statut de contrat non géré
        console.error('Statut de l recupération non géré');
        return;
    }
    updateObservable.subscribe(
      (data) => {
        // handle success
        console.log('Mise à jour effectuée avec succès');
        this.getItems();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour : ', error);
      }
    );
  }


  applyFilterr(event: Event, key: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filterPredicate = (data, filter) => {
      return data[key].trim().toLowerCase().indexOf(filter) !== -1;
    };
  }


}
