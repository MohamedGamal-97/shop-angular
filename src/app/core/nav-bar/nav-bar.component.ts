import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { BasketService } from 'src/app/basket/basket.service';
import { IFavourite } from 'src/app/shared/models/Favourite';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  // basket$?: Observable<IBasket|null>
  @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  basket$:Observable<IBasket>;
  currentUser$: Observable<IUser>;
  constructor(private router:Router,private basketService:BasketService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }


  logout() {
    this.accountService.logout();
  }
  onProductSearch(event:any){
    if(event.keyCode ==13)
    this.goToShop();
  }
  goToShop(){
    this.router.navigate(['shop/', {Search:this.searchTerm.nativeElement.value}])
  }
}
