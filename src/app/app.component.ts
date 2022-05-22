import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { FavouriteService } from './favourite/favourite.service';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'YourStore';
  constructor(
    private favouriteService: FavouriteService,
    private baseketService: BasketService,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    this.loadBasket();
    this.loadFavoutrite();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadFavoutrite() {
    const favouritetId = localStorage.getItem('favourite_Id');
    if (favouritetId) {
      this.favouriteService.getFavourite(favouritetId).subscribe(
        () => {
          console.log('initialised Favourite');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.baseketService.getBasket(basketId).subscribe(
        () => {
          console.log('initialized basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
