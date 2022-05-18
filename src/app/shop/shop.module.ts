import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop.component';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { NpnSliderModule } from "npn-slider";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductDetailsComponent,ProductItemComponent,ShopComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NpnSliderModule,
    RatingModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers:[RatingConfig]
  ,

})
export class ShopModule { }
