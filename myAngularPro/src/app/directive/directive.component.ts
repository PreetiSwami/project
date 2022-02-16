import { Component, OnInit } from '@angular/core';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isCon:boolean=true;
  Cars:string[]=["TATA","BMW","NANO","MARUTI","TOYOTA"];
  myCar:string="MARUTI";
  isval:boolean=true;
  myStyle={
    color:"blue",
    fontSize:"20px",
    backgroundColor:"red"
  }

  myClass={

    "special":this.isval,
    "txtDanger":this.isval,
    "txtSuccess":this.isval
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  myProducts(val:any){
    alert("Your Product is "+val);
  }

}
