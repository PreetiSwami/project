import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  myName:string="First Solution";
  
  imgPath:string="../../assets/pizza.jpg";
  
  imgName:string="Image-1"
  product:any;
  
  cond:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

  greeting(){

    this.cond=!this.cond;
    if(this.cond){
      this.imgPath="../../assets/download.jpg";
      this.imgName="Image-1";
    }else
    {
      this.imgPath="../../assets/food.jpg";
      this.imgName="Image-2";
      
    }
    
  }

}
