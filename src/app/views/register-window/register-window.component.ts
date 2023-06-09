import { Component, OnInit } from '@angular/core';

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
  vorname!:     string;
  nachname!:      string;
  email!:         string;
  passwort!:      string;
  passwort_wiederholt!: string
  geburtstag!:      string;
  profilbild!:string;

  user: User;
  admin: Admin;

  isUser: boolean = true;

  registrationMSG:string = "";

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
    if(this.passwort.toString() != this.passwort_wiederholt.toString()){
      alert("passwörter stimmen nicht überein.");
      bool = false;
    }

    return bool;
  }


  assignAttributesToAccountType(){
    if(this.isUser){
      this.user.firstName = this.vorname;
      this.user.lastName = this.nachname;
      this.user.birthday = this.geburtstag;
      this.user.email = this.email;
      this.user.password = this.passwort;
      this.user.profilePicture = this.profilbild;
    }
    else {
      this.admin.vorname = this.vorname;
      this.admin.nachname = this.nachname;
      this.admin.email = this.email;
      this.admin.passwort = this.passwort;
    }
  }
  register(){ // Zugriff auf Backend durch RegistrationService
    if(this.isUser){ //User Registration

    }
    else { //Admin Registration
      this.registrationService.registerAdmin(this.admin).subscribe(text => this.registrationMSG = text);
    }

    //for testing
    this.updateAdminList();
  }

  setAdminRegistration(){
    this.isUser=false;
  }
  setUserRegistration(){
    this.isUser = true;
  }

  protected readonly last = last;


  //Admin List for Testing
  adminList: Admin[] |any;

  public updateAdminList(){
    this.registrationService.getAdminList().subscribe(list => this.adminList = list);
  }
  ngOnInit():void{
    this.updateAdminList();
    }

}
