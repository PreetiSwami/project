import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../shared/services/my-service.service';

@Component({
  selector: 'app-std-data-comp',
  templateUrl: './std-data-comp.component.html',
  styleUrls: ['./std-data-comp.component.css']
})
export class StdDataCompComponent implements OnInit {
  studentsArray:any;
  constructor(private _mySer:MyServiceService) { } // Dependancy Injection

  ngOnInit(): void {

    this.studentsArray=this._mySer.stdArray;
  }

}
