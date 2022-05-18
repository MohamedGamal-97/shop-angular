import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './favourite/favourite.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'YourStore';

  constructor(private favouriteService: FavouriteService,private baseketService:BasketService){
  }
  ngOnInit(): void {
    const favouritetId = localStorage.getItem('favourite_Id');
    if(favouritetId){
      this.favouriteService.getFavourite(favouritetId).subscribe(() => {
        console.log('initialised Favourite');
      }, error => {
        console.log(error);
      })
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.baseketService.getBasket(basketId).subscribe(()=>{
        console.log('initialized basket');
      },error=>{
        console.log(error);
      })
    }
  }
}
}
