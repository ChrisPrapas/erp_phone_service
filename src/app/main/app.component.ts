import { Customer } from './../interface/customer_interface';
import { AppState } from './../interface/app-state';
import { Component, OnInit } from '@angular/core';
import { ServerService } from './main/assets/service/server.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { DataState } from './main/assets/enum/data-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appState$: Observable<AppState<Response>> = new  Observable<AppState<Response>>();
  constructor(private customerService: ServerService) {

  }
  ngOnInit(): void {
     this.appState$ = this.customerService.customers$
     .pipe(
      map(response => {
        return { DataState: DataState.LOADED_STATE, appData: response }
      }),
      startWith({DataState: DataState.LOADING_STATE}),
      catchError((error:string) => {
        return of({ DataState: DataState.ERROR_STATE, error})
      })
     );
  }
}
