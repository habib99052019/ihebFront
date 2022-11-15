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
     // "ng": "ng",
    // "start": "ng serve",
    // "build": "ng build",
    // "watch": "ng build --watch --configuration development",
    // "test": "ng test"
 /* <section class="py-0 my-7" style="margin-top: 0px;">
 <div class="bg-holder w-50 bg-left  d-none d-lg-block" style="background-image:url(assets/p/img/sharee.png);background-position:top;"></div>
 <!--/.bg-holder-->
 <div class="container">
   <div class="row g-0">
     <div class="col-lg-4 order-1 order-lg-0"> </div>
     <div class="col-lg-8 bg-white">
       <div class="carousel slide" id="carouselShare" data-bs-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active" data-bs-interval="10000">
             <div class="row h-100">
               <div class="pt-5 ps-sm-7" style="margin-bottom: 50px;">
                 <h1 class="mb-2 text-1000" style="text-align: center;">احجز موعد استفسار </h1>
                 <h2 class="mb-3 text-primary fs-3 fs-md-6" style="text-align: center;" >دبي</h2>
                 <h4 class="fw-normal mb-0" style="font-weight: bold; font-family: 'Droid Arabic Kufi', serif;">شقتك بمجتمع سكني نابض بالحياة في موقع متميز في منطقة ميدان المرموقه في قلب ( مدينة سمو الشيخ محمد بن راشد).

                   بجانب شاطئ </h4>
               </div>
               <div class="col-12"><img class="w-100" src="assets/img/IMG-20221107-WA0002.jpg" height="600" alt="..." />
                
               </div>
             </div>
           </div>
           <div class="carousel-item" data-bs-interval="2000">
             <div class="row h-100">
               <div class="pt-5 ps-sm-7" style="margin-bottom: 30px;">
                 <h1 class="mb-2 text-1000" style="text-align: center;">شقتك بين يديك</h1>
                 <h2 class="mb-3 text-primary fs-3 fs-md-6" style="text-align: center;">دبي</h2>
                 <h4 class="fw-normal mb-0" style="font-weight: bold; font-family: 'Droid Arabic Kufi', serif;">وفر جميعها إطلالات رائعة. بالإضافة إلى ذلك ، سيضم المجتمع صالات رياضية وغرف ساونا وبخار وحمامات سباحة ومناطق خضراء وموقف سيارات 

                   بالاضافة الى  مجموعة كبيرة من المقاهي والمطاعم والمحلات التجارية بالمكان.</h4>
               </div>
               <div class="col-12"><img class="w-100" src="assets/img/IMG-20221107-WA0016.jpg" height="600" alt="..." />
                 
               </div>
             </div>
           </div>
          
           <div class="carousel-item">
             <div class="row h-100">
               <div class="pt-5 ps-sm-7" style="margin-bottom: 30px;">
                 <h1 class="mb-2 text-1000" style="text-align: center;">استثمر الآن</h1>
                 <h2 class="mb-3 text-primary fs-3 fs-md-6" style="text-align: center;">دبي</h2>
                 <h4 class="fw-normal mb-0" style="font-weight: bold; font-family: 'Droid Arabic Kufi', serif;">المشروع يخدم الباحثين عن الاستثمار فى دبي و شقق للبيع بدبي رخيصة و جودة عالية و عائد استثمارى عقارى مرتفع
                   إذا ماذا تنتضضر حريفنا الكريم
                   
                 </h4>
               </div>
               <div class="col-12"><img class="w-100" src="assets/img/IMG-20221107-WA0017.jpg" height="600" alt="..." />
                 
               </div>
             </div>
           </div>
         </div>
         <div class="row ps-sm-7 align-items-end">
           <div class="col-4 col-sm-6 position-relative z-index-2">
             <ol class="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
               <li class="active" data-bs-target="#carouselShare" data-bs-slide-to="0"></li>
               <li data-bs-target="#carouselShare" data-bs-slide-to="1"></li>
               <li data-bs-target="#carouselShare" data-bs-slide-to="2"></li>
               <li data-bs-target="#carouselShare" data-bs-slide-to="3"></li>
             </ol>
           </div>
           <div class="col-8 col-sm-6 position-relative z-index-2 text-end"><a class="btn btn-lg text-secondary" href="#" role="button">احجز الآن<svg class="bi bi-arrow-right ms-2" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
               </svg></a></div>
         </div>
       </div>
     </div>
   </div>
 </div>
</section> */
 
}