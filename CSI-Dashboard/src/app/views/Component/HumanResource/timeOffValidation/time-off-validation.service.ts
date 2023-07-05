import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/shared/models/employee';
import { req } from 'app/shared/models/req';
import { TimeOff } from 'app/shared/models/timeOff';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeOffValidationService {

  private apiUrl = 'http://localhost:8084/rh/TimeOff';
  private apiUrl2 = 'http://localhost:8084/rh/employee';

  constructor(private http: HttpClient) { 

  }


  /******* API TimeOff ********/
 // Get All TimeOffs
getItems(): Observable<TimeOff[]> {
  return this.http.get<TimeOff[]>(this.apiUrl + '/getAll').pipe(
    catchError(this.handleError)
  );
}

 // Get Time Off by id
getItem(id: number): Observable<TimeOff> {
  const url = `${this.apiUrl+'/getBy'}/${id}`;
  return this.http.get<TimeOff>(url).pipe(
    catchError(this.handleError)
  );
}


updateStatusToValidatedById(id: number): Observable<any> {
  const url = `${this.apiUrl}/updateStatusToValidatedById/${id}`;
  return this.http.put<any>(url, {}).pipe(
    catchError(this.handleError)
  );
}
updateStatusToRejectedById(id: number): Observable<any> {
  const url = `${this.apiUrl}/updateStatusToRejectedById/${id}`;
  return this.http.put<any>(url, {}).pipe(
    catchError(this.handleError)
  );
}

// get employee by id
getEmployee(id: number): Observable<Employee> {
  const url = `${this.apiUrl2}/get/${id}`;
  return this.http.get<Employee>(url).pipe(
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
