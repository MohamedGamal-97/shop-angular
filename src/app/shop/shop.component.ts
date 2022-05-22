import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IBrand } from '../shared/models/brand';
import { ICategory } from '../shared/models/category';
import { IColor } from '../shared/models/coluor';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ISize } from '../shared/models/size';
import { ShopService } from './shop.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  star=0;
  // @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  min_Range=1;
  max_Range=9000;
  colors:IColor[];
  Sizes:ISize[];
  shopParams: ShopParams;
  products: IProduct[];
  totalCount?: number;
  brands: IBrand[];
  MainBrand:IBrand[];
  categories?: ICategory[];
  sortOptions= [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to high', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDesc' },
    { name: 'Newest Arrivals', value: 'date' },
    { name: 'Product Rating', value: 'star' }
  ];
  constructor(private shopService: ShopService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.shopParams = new ShopParams();
    this.products = [];
    this.colors=[];
    this.Sizes=[];
    this.brands=[];
this.MainBrand=[];
// this.shopParams.ca=this.activatedRoute.snapshot.paramMap.get('Category')
//   if(){
//   }
this.activatedRoute.paramMap.subscribe((params)=>{
  // this.shopParams.subCategory= params.get('SubCategory');
  this.shopParams.categoryId=Number(params.get('CategoryId'));
  this.shopParams.search=params.get('Search');
  this.shopParams.sale=Number(params.get('Sale'));
  this.shopParams.pageNumber = 1;
  this.getProducts();
  });



  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getSizes();
    this.getColors();
    this.getCategories();
  }
  getProducts() {
    // alert(this.shopParams.sale+" "+  this.shopParams.categoryId)
    console.log(this.shopParams.sale+" "+this.shopParams.categoryId);
    this.shopService.getproducts(this.shopParams).subscribe(
      (res) => {
        if (res) {
          this.products = res?.data;
          console.log(res?.data);
          this.shopParams.pageNumber = res?.pageIndex;
          this.shopParams.pageSize = res?.pageSize;
          this.totalCount = res?.count;

        }
      },
      (err) => console.log(err)
    );
  }
  onPageChanged(event: any) {
    console.log(this.shopParams.sale+" page "+this.shopParams.categoryId);
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  getBrands() {
    this.shopService.getBrands().subscribe((brands)=>{
      this.brands= brands;
      this.MainBrand=brands;
    })
  }
  getColors() {
    this.shopService.getColors().subscribe((colors)=>{
      this.colors= colors;
    })
  }
  getSizes() {
    this.shopService.getSizes().subscribe((sizes)=>{
      this.Sizes= sizes;
    })
  }
  getCategories() {
    this.shopService.getCategories().subscribe((categories)=>{
      this.categories= [{id: 0, name: 'All'}, ...categories];
    })
  }
  onSortSelected(sort: any) {
    this.shopParams.sort = sort.value;
    this.getProducts();
  }
  onColorSelected(color:string,event:any){
    if(!event.target.checked){
      this.shopParams.color=this.shopParams.color?.replace('--'+color,"");
      this.shopParams.color=this.shopParams.color?.replace(color,"");
    }
    else{
    if(this.shopParams.color =="")
    this.shopParams.color=color;
    else
    this.shopParams.color+='--'+color;
    }
    this.getProducts();
  }
  onSizeSelected(size:string,event:any){
    if(!event.target.checked){
      this.shopParams.size=this.shopParams.size?.replace('--'+size,"");
      this.shopParams.size=this.shopParams.size?.replace(size,"");
    }
    else{
    if(this.shopParams.size =="")
    this.shopParams.size=size;
    else
    this.shopParams.size+='--'+size;
    }
    this.getProducts();
  }
  onBrandSelected(brand:string,event:any){
    if(!event.target.checked){
      this.shopParams.brand=this.shopParams.brand?.replace('--'+brand,"");
      this.shopParams.brand=this.shopParams.brand?.replace(brand,"");
    }
    else{
    //alert(brand);
    if(this.shopParams.brand =="")
    this.shopParams.brand=brand;
    else
    this.shopParams.brand+='--'+brand;
    }
    this.getProducts();
  }

  onBrandSearch(brand:string){
    brand=brand.toLocaleLowerCase();
    this.brands=this.MainBrand.filter(function(brandQuery){
      return brandQuery.name.toLocaleLowerCase().includes(brand);
    });
  }
onCategorySelected(categoryId:Number){
  this.shopParams.categoryId=categoryId;
  this.shopParams.pageNumber = 1;
  this.shopParams.subCategory=null;
  this.getProducts();
}
onSubCategorySelected(subCategory:string,categoryId:Number){
  this.shopParams.subCategory=subCategory;
  this.shopParams.pageNumber = 1;
  this.shopParams.categoryId=categoryId;
  // alert(this.shopParams.subCategory);
  this.getProducts();
}
  // onSearch(){
  //   this.shopParams.search=this.searchTerm.nativeElement.value;
  //   this.shopParams.pageNumber = 1;
  //   this.getProducts();
  // }
  // onReset(){
  //   // this.shopParams = new ShopParams();
  //   // this.searchTerm.nativeElement.value="";
  //   // this.getProducts();
  //   // this.router.navigate(['shop/', {Search:}])
  // }
  onMinChange(event:any){
    this.min_Range=event.value
    // alert(event.value)
  }
  onMaxChange(event:any){
    this.max_Range=event.value;
    // alert(event.value)
  }
  onSliderChange(selectedValues: number[]) {
    this.min_Range=selectedValues[0];
    this.max_Range=selectedValues[1];

}
onApplyPrice(){
  this.shopParams.maxPrice=this.max_Range;
    this.shopParams.minPrice=this.min_Range;
    // this.shopParams.pageNumber = 1;
    this.getProducts();
}
onRatingchange(star:number){
  if(this.star==star)
    this.star=0;
  else
    this.star=star;
  this.shopParams.star=this.star;
  this.shopParams.pageNumber = 1;
  //alert(this.shopParams.star);
  this.getProducts();

}
}
