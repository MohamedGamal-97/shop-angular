import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SlickCarouselModule,
    RatingModule,
    BrowserModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [
     RatingConfig],
})
export class HomeModule { }
