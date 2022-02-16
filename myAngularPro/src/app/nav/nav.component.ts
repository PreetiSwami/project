import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _globalser:GlobalService,private _routerSer:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    if(confirm("Are you sure to log out"))
    {
       this._globalser.logout();
       this._routerSer.navigate(['/login']);
    }
  }

}
