import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginWindowComponent } from './views/login-window/login-window.component';
import { RegisterWindowComponent } from './views/register-window/register-window.component';
import { DatasetWindowComponent } from './views/dataset-window/dataset-window.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TestWindowComponent } from './views/test-window/test-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginWindowComponent,
    RegisterWindowComponent,
    DatasetWindowComponent,
    ToolbarComponent,
    TestWindowComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
