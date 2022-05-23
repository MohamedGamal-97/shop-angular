import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';


// import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import{CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';

import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    StepperComponent,
    BasketSummaryComponent,
    DashboardComponent,
    OrderTotalsComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    CdkStepperModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    // CarouselModule,
    RouterModule,
    ReactiveFormsModule,

    CarouselModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    CdkStepperModule,
    StepperComponent,
    ReactiveFormsModule,
    BasketSummaryComponent,
    
    ReactiveFormsModule,
    FormsModule,

    DashboardComponent,
    // CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    TextInputComponent,

  ]
})
export class SharedModule { }
