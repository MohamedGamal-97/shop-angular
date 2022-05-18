import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './favourite/favourite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'YourStore';

  constructor(private basketService: FavouriteService){

  }

  ngOnInit(): void {
    const favouritetId = localStorage.getItem('favourite_Id');
    if(favouritetId){
      this.basketService.getFavourite(favouritetId).subscribe(() => {
        console.log('initialised Favourite');
      }, error => {
        console.log(error);
      })
    }
  }
}
