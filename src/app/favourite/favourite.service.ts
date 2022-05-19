import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Favourite, IFavourite, IFavouriteItem } from '../shared/models/Favourite';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  baseUrl =environment.apiUrl;
  private favouriteSource=new BehaviorSubject<IFavourite|null>(null);
  favourit$=this.favouriteSource.asObservable();

  constructor(private http: HttpClient) { }

  //getFavourite{
    getFavourite(id:string){
      return this.http.get(this.baseUrl+'Favourite?id='+id).pipe(
        map((favourite:any)=>{
          this.favouriteSource.next(favourite)
        })

      )
    }
  //getFavourite}

  //postFavourite{
    setFavourite(favourite: IFavourite) {
      return this.http.post(this.baseUrl + 'Favourite', favourite).subscribe((response:any) => {
        this.favouriteSource.next(response);
      }, error => {
        console.log(error);
      })
    }
  //postFavourite}

  //deleteFavourite{
    deleteFavourite(id:string){
      return this.http.delete(this.baseUrl+'Favourite?id='+id).subscribe(() => {
        this.favouriteSource.next(null);
        localStorage.removeItem('basket_id');
      }, error => {
        console.log(error);
      })
    }
  //deleteFavourite}

  //getCurrentValue_of_Favourite{
    getCurrentFavouriteValue() {
      return this.favouriteSource?.value;
    }
  //getCurrentValue_of_Favourite}

  addItemToFavourite(item:IProduct){
    const itemToAdd:IFavouriteItem=this.mapProductItemToFavouriteItem(item);
    const favourite=this.getCurrentFavouriteValue()??this.createFavourite();
    favourite.items = this.addOrUpdateItem(favourite.items, itemToAdd);
    // alert(itemToAdd.name);
    this.setFavourite(favourite);
  }

  private addOrUpdateItem(items: IFavouriteItem[], itemToAdd: IFavouriteItem): IFavouriteItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      items.push(itemToAdd);
    } else {
      this.removeItemFromBasket(items[index]);
    }
    return items;
  }
  removeItemFromBasket(item: IFavouriteItem) {
    const favourite = this.getCurrentFavouriteValue();
    if (favourite&&favourite.items.some(x => x.id === item.id)) {
      favourite.items = favourite.items.filter(i => i.id !== item.id);//returns all except this item condition
      if (favourite.items.length > 0) {
        this.setFavourite(favourite);
      } else {
        this.deleteFavourite(favourite.id);
      }
    }
  }
  //Create_New_Favourite{
    private createFavourite(){
      const favourite=new Favourite();
      localStorage.setItem('favourite_Id',favourite.id);
      return favourite;
    }
  //Convert_From_IProduct_To_IFavouriteItem{
    private mapProductItemToFavouriteItem(item: IProduct): IFavouriteItem {

      return {
        id: item.id,
        name: item.name,
        price: item.price,
        pictureUrl: item.pictureUrl[0],
        brand: item.productBrand,
        description:item.description,
        subCategory:item.subCategory,
        Sale:item.sale
      }
    }
  //Convert_From_IProduct_To_IFavouriteItem}
}
