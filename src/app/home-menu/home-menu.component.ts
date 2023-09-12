import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  @Input()
  classApplied1 : boolean = false;

  constructor() {
    
  }
  
  ngOnInit(): void {
    
  }
}
