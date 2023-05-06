import { Component } from '@angular/core';
import { TestServiceService } from "../../services/test-service.service"

import { TestObject } from "../../Models/testObject";
@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css']
})
export class TestWindowComponent {
  backendText: string = "aktuell noch kein BackendText";

  text:string = "";
  testObject:TestObject;
  backendMSG:string = "";
  testObjectList:TestObject[]|any;
  constructor(private testService : TestServiceService) {
    this.testObject = new TestObject();
  }
  
  public updateTestObjectList(){
    this.testService.getTestObjectList().subscribe(data => {
      this.testObjectList = data;
    })
  }

  public createTestObject(){
    this.testObject.text = this.text;
    this.testService.createTestObject(this.testObject).subscribe(text =>{
      this.backendMSG = text;
    } );
    console.log(this.text);
  }

  public getBackendText(){
    this.testService.getBackendText().subscribe(data =>{
      this.backendText = data;
    })
  }
}
