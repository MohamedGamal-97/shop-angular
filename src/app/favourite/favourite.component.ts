import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavourite, IFavouriteItem } from '../shared/models/Favourite';
import { FavouriteService } from './favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  favourite$?: Observable<IFavourite|null>;

  constructor(private favService: FavouriteService) { }

  ngOnInit(): void {
    this.favourite$ = this.favService.favourit$;
  }

  removeBasketItem(item: IFavouriteItem) {
    this.favService.removeItemFromBasket(item);
  }

}
