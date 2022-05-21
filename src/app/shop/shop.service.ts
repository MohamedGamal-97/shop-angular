import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl= 'https://localhost:7260/api/';

  constructor(private http:HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId){
      params=params.append("brandId",shopParams.brandId.toString());
    }

    if(shopParams.typeId){
      params=params.append("typeId",shopParams.typeId.toString());
    }

    if(shopParams.sort){
    params=params.append("sort",shopParams.sort);
    }

    if(shopParams.search){
      params=params.append("search",shopParams.search);
    }
    params=params.append("pageIndex",shopParams.pageNumber.toString());
    params=params.append("pageSize",shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl+'products',{observe:"response",params})
    .pipe(
      map(response=>{
        return response.body;
      })
    );
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'products/types');
  }

  getProduct(id:number){
    return this.http.get<IProduct>(this.baseUrl+'products/'+id);
  }

  PostProduct( Name :string,  Description:string ,  Price:number
    ,  PictureUrl:string,  ProductTypeId:number,  ProductBrandId:number )
    {
      this.http.post<any>(this.baseUrl+'products/PostProduct', {Name, Description, Price, 
      PictureUrl, ProductTypeId, ProductBrandId},).subscribe(data => {
        console.log(data);
    });
    }
}
