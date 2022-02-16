import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addition(no1:number,no2:number){
    return no1 + no2;
  }
     
}
