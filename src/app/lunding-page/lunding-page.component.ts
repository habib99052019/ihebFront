import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


//import * as  AOS from 'aos';

@Component({
  selector: 'app-lunding-page',
  templateUrl: './lunding-page.component.html',
  styleUrls: ['./lunding-page.component.css']
})
export class LundingPageComponent implements OnInit {
//agm
// google maps zoom level
public zoom: number = 9;
  
// initial center position for the map
public lat: number = 35.7884241;
public lng: number = -83.5543329;
public googleMapType = 'satellite';

images = [
  {path: 'https://source.unsplash.com/800x600/?nature'},
  {path: 'https://source.unsplash.com/800x600/?car'},
  {path: 'https://source.unsplash.com/800x600/?moto'},
  {path: 'https://source.unsplash.com/800x600/?fantasy'},
]
//agm
  user= new FormGroup({
 
    name: new FormControl('',[Validators.required ]),
   
    lastName: new FormControl('',[Validators.required ]),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    typRef:new FormControl(""),
    typM:new FormControl(""),
    typB:new FormControl(""),
    date:new FormControl(""),
    country:new FormControl(""),
  
  })
  disable=false
  affichEtape2=false
  countrySelcted="dubai"
    sk=true
    al=false
    affichDF=false
    crid=false
    affDate=false
    date="حاليا"
    bud=false
    budj=false
    affForm=false
    affDat=false
    title = 'IhebFront2';
    typRef='صالة وغرفة'
    typM='كاش' 
    typB="AED 1000000 -> AED 2000000"
    tabMony:string[]=['كاش ','تمويل بنكي']
    tabsaken:string[]=[" صالة وغرفة"," صالة و غرفتين","صالة و ثلاثة غرف",'محل تجاري' ] 
    //tabIsthmar:string[]=["محل تجاري","شركة","عمارة " ] 
    tabBudjet:string[]=["AED 1000000 -> AED 2000000","AED 2000000 -> AED 3500000","more than AED 3500000"]
    tabDate:string[]=['حاليا',' من شهر الى ثلاثة اشهر ','بعد سنة']

constructor(private http:HttpClient ) { }
  
    ngOnInit(): void {
     /* AOS.init();
      AOS.refresh();*/
    }
    Navigate(elem: HTMLElement ) {
      elem.scrollIntoView({ behavior: 'smooth' });
      }
 
    selectS(i:any){
      
      this.typRef=this.tabsaken[i.target.value]
    
      console.log(5)
      this.budj=true
    }
    selectB(i:any){
      
      this.typB =this.tabBudjet[i.target.value]
     
      console.log(5)
      this.crid=true
    }
    selectM(i:any){
      
      this.typM=this.tabMony[i.target.value]
     
      
      console.log(5)
      this.affDate=true
    }
    selectD(i:any){
      
      this.date=this.tabDate[i.target.value]
     
      console.log(5)
      this.affForm=true
    }
    enregisterClient(){
      this.user.get("typB")?.setValue(this.typB)
      this.user.get("typRef")?.setValue(this.typRef)
      this.user.get("country")?.setValue(this.countrySelcted)
      this.user.get("typM")?.setValue(this.typM)
      console.log(this.user.value)
      this.al=true
      this.http.post('http://localhost:5900/email//send-mail/',this.user.value).subscribe(res=>{
        console.log(res)
      })
      this.http.post('http://localhost:5900/email//send-mail1/',this.user.value).subscribe(res=>{
        console.log(res)
      })
  }
  funcaffichEtape2(){
    this.affichEtape2=true
  }
  country(e:any){
    this.countrySelcted=e.target.value
  }

  }
