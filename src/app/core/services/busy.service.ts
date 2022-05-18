import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount=0;
  constructor(private spinnerService:NgxSpinnerService) { }
  busy(){
    this.busyRequestCount++;
    this.spinnerService.show(undefined,{
      // type: "line-scale-party",
  // size: "large",
  // bdColor: "rgba(0, 0, 0, 1)",
  // color: "white",
    });
  }
  idl(){
   this.busyRequestCount--;
   if(this.busyRequestCount<=0){
     this.busyRequestCount=0;
     this.spinnerService.hide();
   }
  }
}
