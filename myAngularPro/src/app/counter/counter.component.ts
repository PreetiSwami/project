import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterVal:number=0;
  counterMsg:string='';

  constructor() { }

  ngOnInit(): void {
  }
  counterIncrement(){
    this.counterVal+=1;
    this.counterMsg="Counter Value"+this.counterVal;

  }
  counterDecrement(){
    this.counterVal-=1;
    this.counterMsg="Counter Value"+this.counterVal;
    
  }
}
