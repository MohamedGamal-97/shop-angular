import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';



@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule
  ],

})
export class FavouriteModule { }
