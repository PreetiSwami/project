import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { pipe } from 'rxjs';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { RtfComponent } from './rtf/rtf.component';
import { AuthGuard } from './shared/Autentication/auth.guard';
import { myCourse } from './shared/constant/constantdata';
import { StdDataCompComponent } from './std-data-comp/std-data-comp.component';
import { UtdfComponent } from './utdf/utdf.component';

const routes: Routes = [


  {path:"",redirectTo:"login",pathMatch:"full"},

  {path:"login",component:LoginComponent,},
  {path:"databinding",component:DataBindingComponent,canActivate:[AuthGuard]},                     //default routing
  //{path:"databinding",redirectTo:"directive",pathMatch:"full"},//redirect routing
  {path:"counterParent",component:CounterParentComponent,canActivate:[AuthGuard]},
  
  {path:"std-data-comp",component:StdDataCompComponent,canActivate:[AuthGuard]},
  {path:'crud',loadChildren:()=>import('./crud/crud.module').then((m)=> m.CrudModule),canActivate:[AuthGuard]},//lazyloading custome module//

  {path:"directive",component:DirectiveComponent,canActivate:[AuthGuard]},
  {path:"parent",component:ParentComponent,canActivate:[AuthGuard]},
  {path:"angularforms",component:AngularformsComponent,children:[
    {path:"utdf",component:UtdfComponent},
    {path:"rtf",component:RtfComponent}
  ],canActivate:[AuthGuard]},
  {path:"pipe",component:PipeComponent,canActivate:[AuthGuard]},
  //{path:"**",component:PagenotfoundComponent}          //wildcard routing
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
