import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import {RegName,myCourse} from 'src/app/shared/constant/constantdata';
@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {
stdForm:any;
courses=myCourse;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    //this.stdForm= new FormGroup({
      //stdName: new FormControl('',[Validators.required,Validators.pattern(RegName)]),
      //stdPassword:new FormControl(''),
      //stdEmail:new FormControl(''),
      //stdContact:new FormControl('')

      //stdCourse:new FormControl('',[Validators.required]),
      //stdTerm:new FormControl('',[Validators.requiredTrue])

       this.stdForm=this.fb.group({
         stdName:['',[Validators.required,Validators.pattern(RegName)]],
         stdCourse:['',Validators.required],
         stdTerm:['',Validators.requiredTrue]

                                  })
    
  }

  getData(val:any){
    console.log(val);
    
  }

}
