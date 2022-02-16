import { Component, OnInit,TemplateRef } from '@angular/core';
import { MyServiceService } from 'src/app/shared/services/my-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
  
})
export class DashoardComponent implements OnInit {
  modalRef?: BsModalRef;
  p:number=1;
  searchRecord:string='';
  
  constructor(private _dbSer:MyServiceService,private modalService: BsModalService,private _globalser:GlobalService) { }
  



  empData:any;


  ngOnInit(): void {
    
    this.fetchData();
  }
// CODE FOR MODELPOPUP

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

  fetchData(){
    //this._dbSer.getRecord().subscribe((res)=>{
     // this.empData=res;
      
    //})
    this._globalser.getRecord('/employees').subscribe((res)=>{
      this.empData=res;
    })
    
  }

  deleteData(val:any){
    if(confirm(`Are You sure to Delete Record with Id ${val}`)){
      this._dbSer.deleteRecord(val).subscribe(()=>{
        
        this.fetchData();
        alert("Record Deleted Successfully");
      })
    }

  }
  

}
