import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import{DBURL} from 'src/app/shared/constant/constantdata';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  option={headers:new HttpHeaders().set("Content-type","application/json")};

  constructor(private _http:HttpClient) { }
  formate(error:any){
    return throwError(error.error);
    
  }

  //get Data
  getRecord(path:string):Observable<any>{
    return this._http.get(DBURL+path).pipe(catchError(this.formate))


  } 

  //get single record
 getsingleRecord(path:string,id:number):Observable<any>{
   const url=`${DBURL}/${path}/${id}`;  //http://localhost.3000/employees/id
   return this._http.get(url).pipe(catchError(this.formate));

 }

 //putRecord
 putRecord(path:string,id:number,empObj={}){
   const url=`${DBURL}/${path}/${id}`;
   return this._http.put(url,empObj).pipe(catchError(this.formate));
 }

 //add record
 addRecord(path:string,empObj={}){
   return this._http.post(DBURL,empObj).pipe(catchError(this.formate));

 }

 //DELETE RECORD
 deleteRecord(path:string,id:number){
  const url=`${DBURL}/${path}/${id}`;
  return this._http.delete(url).pipe(catchError(this.formate));

 }
//login user
 login(user:any){
  sessionStorage.setItem("user",user);

}
//logout user
logout(){
  sessionStorage.removeItem("user");
}

}
