import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  private baseURL:String = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public registerAdmin(){

  }

  public registerUser(){

  }
  
}
