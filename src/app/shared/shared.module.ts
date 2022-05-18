import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MessageBoxComponent } from './components/message-box/message-box.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    DashboardComponent,
    MessageBoxComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule,
    RouterModule,

  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    DashboardComponent,
    MessageBoxComponent
  ]
})
export class SharedModule { }
