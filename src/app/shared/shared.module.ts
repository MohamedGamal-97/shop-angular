import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    DashboardComponent,
    MessageBoxComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    // CarouselModule,
    RouterModule,

    CarouselModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    ReactiveFormsModule,
    FormsModule,

    DashboardComponent,
    // CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
