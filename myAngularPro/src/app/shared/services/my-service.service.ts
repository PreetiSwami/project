import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from 'src/app/shared/constant/constantdata';
import {Employee} from 'src/app/shared/classes/Employee';

@Injectable({
  providedIn: 'root'
})


export class MyServiceService {


  stdArray=students;
  dburl:string="http://localhost:3000/employees";

  constructor(private _http:HttpClient) { }


  //To fetch data from server

  getRecord():Observable<Employee[]>{
    return this._http.get<Employee[]>(this.dburl);
  }

  //To add Recrd in database
  addRecord(emp:any){
    return this._http.post(this.dburl,emp);
  }


//To edit time
deleteRecord(id:number){
  const baseUrl=`${this.dburl}/${id}`  //http://localhost:3000/employees/id
  return this._http.delete(baseUrl);
  }
//get Single Record
getSingleRecord(id:number){
  const baseUrl=`${this.dburl}/${id}` 
  return this._http.get(baseUrl);

}

//to update record
updateRecord(emp:any){
  const baseUrl=`${this.dburl}/${emp.id}`  //http://localhost:3000/employees/id
  return this._http.put(baseUrl,emp);
}

//get user Credential
getUser(){
  return this._http.get("http://localhost:3000/login");
}

login(user:any){
  sessionStorage.setItem("user",user);

}
logout(){
  sessionStorage.removeItem("user");
}



}
