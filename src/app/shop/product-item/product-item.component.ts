import { Component, Input, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/favourite/favourite.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  max:5;
  constructor(private favouriteService: FavouriteService,private basketService:BasketService) {}

  ngOnInit(): void {
    // alert((favourite$|async).items);
  }
  addItemToFavourite() {
    this.favouriteService.addItemToFavourite(this.product);
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

}
