import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipeComponent } from './pipe/pipe.component';
import { MygenderPipe } from './shared/customePipe/mygender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { MyDirectoryDirective } from './shared/customeDir/my-directory.directive';
import { StdDataCompComponent } from './std-data-comp/std-data-comp.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MytestComponent } from './mytest/mytest.component'


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectiveComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    FooterComponent,
    AngularformsComponent,
    UtdfComponent,
    RtfComponent,
    PagenotfoundComponent,
    PipeComponent,
    MygenderPipe,
    CounterComponent,
    CounterParentComponent,
    MyDirectoryDirective,
    StdDataCompComponent,
    LoginComponent,
    MytestComponent,
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
