import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { IPagination } from '../shared/models/pagination';
import { ICategory } from '../shared/models/category';
import { ISize } from '../shared/models/size';
import { IColor } from '../shared/models/coluor';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7260/api/'

  constructor(private http: HttpClient) {

  }
  getproducts(shopParams: ShopParams){
    let params=new HttpParams();

    if (shopParams.brand ) {
      params = params.append('Brand', shopParams.brand)
    }

    if (shopParams.color ) {
      params = params.append('Color', shopParams.color)
    }
    if (shopParams.size ) {
      params = params.append('Size', shopParams.size)
    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search)
    }
    if (shopParams.star) {
      params = params.append('Star', shopParams.star.toString())
    }
    if (shopParams.subCategory) {
      params = params.append('SubCategory', shopParams.subCategory);
    }
    if (shopParams.categoryId!==0) {
      params = params.append('CategoryId', shopParams.categoryId.toString())
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('sale', Number(shopParams.sale));
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    params = params.append('MinPrice', shopParams.minPrice.toString());
    params = params.append('MaxPrice', shopParams.maxPrice.toString());
    // alert(shopParams.minPrice);
    return this.http.get<IPagination>(this.baseUrl+'products',{observe: 'response',params})
    .pipe(
      map(res=>{return res.body;})
    )
  }
  getproduct(id:number){
    return this.http.get<IProduct>(this.baseUrl+'products/'+id)
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
  getSizes() {
    return this.http.get<ISize[]>(this.baseUrl + 'products/Sizes');
  }
  getColors() {
    return this.http.get<IColor[]>(this.baseUrl + 'products/Colors');
  }
  getCategories() {
    return this.http.get<ICategory[]>(this.baseUrl + 'products/Categories');
  }

  PostProduct( obj:any)
    {
      console.log(obj);
      this.http.put<any>(this.baseUrl+'products',obj).subscribe(data => {
        console.log(data);
    });
    }
}
