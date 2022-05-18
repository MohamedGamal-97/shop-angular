import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  SameSubCategory:IProduct[];
  max=5;
  shopParams: ShopParams;

  quantity = 1;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute,private bcService:BreadcrumbService
    ,private basketService:BasketService) {
     this.shopParams=new ShopParams();
     this.SameSubCategory=[];
     this.bcService.set("@ProductDetails",'')
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      // this.shopParams.subCategory= params.get('SubCategory');
      // this.shopParams.categoryId=Number(params.get('Category'));

      this.getProduct(Number(params.get('id')));
      });

  }

  getProductBySubCategory(){
    this.shopParams.pageSize=20;
    this.shopParams.sort='date';
    this.shopParams.subCategory=this.product.subCategory;
     this.shopService.getproducts(this.shopParams).subscribe(
      (res)=>{

        this.SameSubCategory=res?.data;

        // alert(this.BestCategory+"num2");
      }
     );
  }
  getProduct(id:number){
    this.shopService.getproduct(id).subscribe(
      product=>{
        this.product=product
        alert(product.productReviews[0]);
        this.bcService.set("@ProductDetails",product.name)
        this.getProductBySubCategory();

      }
    )
  }
  // getProductSizes(){
  //   this.productInfoFilter=this.productInfo.filter(function (el){
  //     return el.color==color;
  //   })

  // }


  slideConfig = {"slidesToShow": 6, "slidesToScroll": 6,"infinite": false,'dots': true,  'autoplay': true,  'adaptiveHeight': true,'draggable':true,    autoplaySpeed: 4000,} ;

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
}
