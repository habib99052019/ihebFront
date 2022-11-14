import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import * as  AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public zoom: number = 9;
  
  // initial center position for the map
  public lat: number = 35.7884241;
  public lng: number = -83.5543329;
  public googleMapType = 'satellite';
  affMap=false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   /* AOS.init();
    AOS.refresh();*/
  }
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    }
    funcAffMap(){
      this.affMap=true
    }
 
 
}