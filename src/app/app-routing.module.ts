import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {LoginWindowComponent} from "./Views/login-window/login-window.component";
import {RegisterWindowComponent} from "./Views/register-window/register-window.component";
import {DatasetWindowComponent} from "./Views/dataset-window/dataset-window.component";

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginWindowComponent},
  {path: 'registration', component: RegisterWindowComponent},
  {path: 'datasets', component: DatasetWindowComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
