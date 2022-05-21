import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAddressRoutingModule } from './edit-address-routing.module';
import { EditAddressComponent } from './edit-address.component';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
 EditAddressComponent,
  ],
  imports: [
    CommonModule,
    EditAddressRoutingModule,
    SharedModule,
  ]
})
export class EditAddressModule { }
