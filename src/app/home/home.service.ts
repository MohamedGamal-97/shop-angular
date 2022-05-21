import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IPagination } from '../shared/models/pagination';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'https://localhost:7260/api/';
  constructor(private http:HttpClient) { }
  getproducts(shopParams: ShopParams){
    let params=new HttpParams();
    if (shopParams.brand) {
      params = params.append('Brand', shopParams.brand.toString())
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString())
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search)
    }
    if (shopParams.categoryId) {
      params = params.append('Category', shopParams.categoryId.toString())
    }
    if (shopParams.subCategory) {
      params = params.append('SubCategory', shopParams.subCategory)
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageSize',  shopParams.pageSize.toString());
    // if (shopParams.take) {
    //   params = params.append('take', shopParams.take)
    // }
    return this.http.get<IPagination>(this.baseUrl+'products',{observe: 'response',params})
    .pipe(
      map(res=>{return res.body;})
    )
  }
}
