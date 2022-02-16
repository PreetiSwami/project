import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent implements OnInit {


myCourse:string[]=["Angular","Fullstack","MEAN","JAVA"];
  constructor() { }

  ngOnInit(): void {
  }

  getStudentData(val:any){
    console.log(val);
  }

  myCours(val:any){
    console.log(val);
  }

}
