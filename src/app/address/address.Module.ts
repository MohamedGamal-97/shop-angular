import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address-routing.module';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddressComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule,
  ]
})
export class AddressModule { }
