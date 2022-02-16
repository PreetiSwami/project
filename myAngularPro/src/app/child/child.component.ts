import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentdata="";
  @Output() eventObj=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendMata(val:any){
    this.eventObj.emit(val);
  }

}
