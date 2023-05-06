import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../Models/Admin";
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  private baseURI:String = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public registerAdmin(admin:Admin){
    return this.http.post(this.baseURI+'/registration/create', admin,  {responseType: 'text'});
  }

  public getAdminList(){
    return this.http.get<Admin[]>(this.baseURI+'/registration/list');
  }

  public registerUser(){

  }

}
