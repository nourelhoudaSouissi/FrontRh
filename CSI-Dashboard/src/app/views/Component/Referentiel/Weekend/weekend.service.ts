import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Weekend } from 'app/shared/models/weekend';

@Injectable({
  providedIn: 'root'
})
export class WeekendService {

  private apiUrl = 'http://localhost:8084/rh/weekend';

  constructor(private http: HttpClient) { }


  // Get All Weekends
  getItems(): Observable<Weekend[]> {
    return this.http.get<Weekend[]>(this.apiUrl + '/getAllWeekends').pipe(
      catchError(this.handleError)
    );
  }
  
  
  // Get Weekend by id
  getItem(id: number): Observable<Weekend> {
    const url = `${this.apiUrl+'/getWeekendById'}/${id}`;
    return this.http.get<Weekend>(url).pipe(
      catchError(this.handleError)
    );
  }
  
   // DELETE Weekend by id
   deleteItem(id: number): Observable<Weekend> {
    const url = `${this.apiUrl+'/delete'}/${id}`;
    return this.http.delete<Weekend>(url).pipe(
      catchError(this.handleError)
    );
  }
  
   // Add new Weekend
  addItem(weekend: any): Observable<any> {
    return this.http.post<Weekend>(`${this.apiUrl+'/createWeekend'}`, weekend).pipe(
      catchError(this.handleError)
    );
  }
  
  
  // PUT an existing Weekend
  updateItem(id: number, weekend: Weekend): Observable<Weekend> {
    const url = `${this.apiUrl +'/updateWeekend'}/${id}`;
    return this.http.put<Weekend>(url, weekend).pipe(
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
