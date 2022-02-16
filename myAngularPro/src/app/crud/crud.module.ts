import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { AddComponent } from './add/add.component';
import { DashoardComponent } from './dashoard/dashoard.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AddComponent,
    DashoardComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CrudModule { }
