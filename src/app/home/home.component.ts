import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../basket/basket.service';
import { FavouriteService } from '../favourite/favourite.service';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ////////////////////////////////drafts from bido:////////////////////////////////
  //hey guys, I just used object bec I wanted to send data by refernce bec I wanted to use the same function
  //I didn't want to create function for everything

  max: number = 5;
  value: number = 3.2;
  shopParams: ShopParams;
  newArrivals:{array:IProduct[]};
  BestSellers:{array:IProduct[]};
  BestWatches:{array:IProduct[]};
  BestProducts:{array:IProduct[]};
  BestTvs:{array:IProduct[]};
  constructor(private homeService:HomeService,private router:Router
    ,private favouriteService:FavouriteService,private basketService:BasketService) {
    this.shopParams=new ShopParams();
    this.newArrivals={array:[]};
    this.BestSellers={array:[]};
    this.BestProducts={array:[]};
    this.BestWatches={array:[]};
    this.BestTvs={array:[]};
  }

  ngOnInit(): void {
    this.shopParams.pageSize=15;
    //// products with top rating
    this.shopParams.sort='star';
    this.getProducts(this.BestProducts);

    //// tvs with top rating
    this.shopParams.sort='star';
    this.shopParams.categoryId=1;
    this.getProducts(this.BestTvs);

    //// watches with top rating
    this.shopParams.sort='star';
    this.shopParams.categoryId=2;
    this.getProducts(this.BestWatches);

    //// products new Arrival
    this.shopParams.pageSize=12;
    this.shopParams.categoryId=0;
    this.shopParams.sort='date';
    this.getProducts(this.newArrivals);

    //// products with most selling
    this.shopParams.categoryId=0;
    this.shopParams.sort='selling';
    this.getProducts(this.BestSellers);

  }
 getProducts(arrayGeneric){
  this.homeService.getproducts(this.shopParams).subscribe(
    (res)=>{
      if (res)
      arrayGeneric.array=res?.data;
        //alert(this.newArrivals.array);

    }
  );
 }


  shopSale(_sale:Number,_categoryId:Number){
    this.router.navigate(['shop/', { Sale:_sale, CategoryId:_categoryId }])
  }
  shop(_search:string){
    this.router.navigate(['shop/', {Search:_search }])
  }
  addItemToFavourite(product:IProduct) {
    this.favouriteService.addItemToFavourite(product);
  }
  addItemToBasket(product:IProduct) {
    this.basketService.addItemToBasket(product);
  }
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  slideConfig2 = {"slidesToShow": 6, "slidesToScroll": 6,"infinite": false,'dots': true,  'autoplay': true,  'adaptiveHeight': true,'draggable':true,    autoplaySpeed: 4000,} ;
}
