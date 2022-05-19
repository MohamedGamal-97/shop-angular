import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsComponent } from './profile-details.component';
import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
 ProfileDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule,
    SharedModule,
  ]
})
export class ProfileDetailsModule { }
