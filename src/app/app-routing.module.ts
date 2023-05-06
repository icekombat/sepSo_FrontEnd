import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {LoginWindowComponent} from "./views/login-window/login-window.component";
import {RegisterWindowComponent} from "./views/register-window/register-window.component";
import {DatasetWindowComponent} from "./views/dataset-window/dataset-window.component";

//Test
import {TestWindowComponent} from "./views/test-window/test-window.component"

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginWindowComponent},
  {path: 'registration', component: RegisterWindowComponent},
  {path: 'datasets', component: DatasetWindowComponent},
  
  //Test
  {path: 'test',component: TestWindowComponent}
  //,{path: '', redirectTo:'/test', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
