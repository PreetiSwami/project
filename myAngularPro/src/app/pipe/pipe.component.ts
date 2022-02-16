import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  msg:string="How are You all my dear friends.";
  employee={
    id:101,name:"Anmol",post:"Fullstack developer",salary:80000
  }
  students=[
    {id:120,name:"Saurabh",address:"Pune",gender:"male"},
    {id:121,name:"Dipak",address:"Mumbai",gender:"male"},
    {id:122,name:"Nandini",address:"Rajkot",gender:"female"},
    {id:123,name:"Dipali",address:"Delhi",gender:"female"},
    {id:124,name:"Sumit",address:"Pune",gender:"male"},
  ]

  d=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
