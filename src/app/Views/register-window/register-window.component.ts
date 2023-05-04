import { Component } from '@angular/core';

import {RegistrationServiceService} from "../../services/registration-service.service"

import {Admin } from "../../Models/Admin";
import {User } from "../../Models/User";
import {last} from "rxjs";
@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.css']
})
export class RegisterWindowComponent {
  //Data coming in
  firstName!:     string;
  lastName!:      string;
  email!:         string;
  password!:      string;
  password_repeated!: string
  birthday!:      string;
  profilePicture!:string;

  user: User;
  admin: Admin;

  isUser: boolean = true;
  constructor( private registrationService: RegistrationServiceService) {
    this.user = new User();
    this.admin = new Admin();
  }

  toggleRegistration(){
    if(!this.checkInputData())return;
    this.assignAttributesToAccountType();
    this.register();
  }


  checkInputData():boolean{
    let bool: boolean = true;

    if( !(this.email.indexOf("@")>=0) || !(this.email.indexOf(".")>=0) ){
      alert("email nicht Korrekt angegeben.");
      bool = false;
    }
    if(this.password.toString() != this.password_repeated.toString()){
      alert("passwörter stimmen nicht überein.");
      bool = false;
    }

    return bool;
  }


  assignAttributesToAccountType(){
    if(this.isUser){
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.birthday = this.birthday;
      this.user.email = this.email;
      this.user.password = this.password;
      this.user.profilePicture = this.profilePicture;
    }
    else {
      this.admin.firstName = this.firstName;
      this.admin.lastName = this.lastName;
      this.admin.email = this.email;
      this.admin.password = this.password;
    }
  }

  register(){ // Zugriff auf Backend durch RegistrationService
    if(this.isUser){

    }
    else {

    }
  }

  setAdminRegistration(){
    this.isUser=false;
  }
  setUserRegistration(){
    this.isUser = true;
  }

  protected readonly last = last;
}
