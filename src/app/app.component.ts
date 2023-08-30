import { Customer } from './../interface/customer_interface';
import { AppState } from './../interface/app-state';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { DataState } from './enum/data-state.enum';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  classApplied = false;
  
  appState$: Observable<AppState<Response>> = new  Observable<AppState<Response>>();
  
  constructor(private customerService: ServerService) {}
  ngOnInit(): void {
    var array = Array.prototype.slice.call(document.querySelectorAll(".nav-lista"));
    array.forEach(function(el) {
      // Callbacks are passed a reference to the event object that triggered the handler
      el.addEventListener("click", function(this: any) {
          // The this keyword will refer to the element that was clicked
          if(array) {
            array.forEach(l => l.classList.remove('ativo'));
            el.classList.add('ativo');
          }
          console.log(this.id, el); 
      });
    }) 
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

  toggleColor(arg1?: any) {
    
    console.log(arg1)
  }
  toggleMenu() {
    this.classApplied = !this.classApplied;
  }
  
}
