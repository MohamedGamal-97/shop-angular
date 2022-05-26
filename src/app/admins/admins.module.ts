import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './Add/add.component';
import { RouterModule, Routes } from '@angular/router';
 //import { RegisterComponent } from './register/register.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class adminModule { }
