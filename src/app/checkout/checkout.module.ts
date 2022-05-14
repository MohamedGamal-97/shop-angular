import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
<<<<<<< HEAD
=======
import { CheckoutRoutingModule } from './checkout-routing.module';
>>>>>>> 19c0e7c183190f4975859a374029deb054117ebc



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
  CheckoutRoutingModule
>>>>>>> 19c0e7c183190f4975859a374029deb054117ebc
  ]
})
export class CheckoutModule { }
