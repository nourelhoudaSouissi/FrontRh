import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LeaveType } from 'app/shared/models/leaveType';

import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  private apiUrl = 'http://localhost:8084/rh/leaveType';

  constructor(private http: HttpClient) { 

  }

  /******* API LeaveType ********/
 // Get All LeaveTypes
 getItems(): Observable<LeaveType[]> {
  return this.http.get<LeaveType[]>(this.apiUrl + '/getAllLeaveTypes').pipe(
    catchError(this.handleError)
  );
}

// Get Leave Type by id
getItem(id: number): Observable<LeaveType> {
  const url = `${this.apiUrl+'/getLeaveTypeById'}/${id}`;
  return this.http.get<LeaveType>(url).pipe(
    catchError(this.handleError)
  );
}

 // DELETE Leave Type by id
 deleteItem(id: number): Observable<LeaveType> {
  const url = `${this.apiUrl+'/delete'}/${id}`;
  return this.http.delete<LeaveType>(url).pipe(
    catchError(this.handleError)
  );
}

 // Add new Leave Type 
addItem(leaveType: any): Observable<any> {
  return this.http.post<LeaveType>(`${this.apiUrl+'/addLeaveType'}`, leaveType).pipe(
    catchError(this.handleError)
  );
}


// PUT an existing Leave Type
updateItem(id: number, leaveType: LeaveType): Observable<LeaveType> {
  const url = `${this.apiUrl +'/updateRecoveryLeave'}/${id}`;
  return this.http.put<LeaveType>(url, leaveType).pipe(
    catchError(this.handleError)
  );
}


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

}
