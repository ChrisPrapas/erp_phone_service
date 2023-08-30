import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Customer } from 'src/interface/customer_interface';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private readonly apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  customers$ =  <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/customer/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  save$ = (customer : Customer) => <Observable<Response>>
  this.http.post<Response>(`${this.apiUrl}/customer/save`, customer)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  search_phoneNumber$ = (phoneNumber : number) => <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/customer/search/${phoneNumber}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  search_customerId$ = (customerId : string) => <Observable<Response>>
  this.http.get<Response>(`${this.apiUrl}/customer/search/${customerId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  delete$ = (customerId : string) => <Observable<Response>>
  this.http.delete<Response>(`${this.apiUrl}/customer/delete/${customerId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  handleError(handleError: HttpErrorResponse): Observable<never> {
    console.log(handleError);
    return throwError(() =>`An error occurred! with error code ${handleError.error}`);
  }
}

 