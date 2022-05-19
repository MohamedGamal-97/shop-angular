import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data: { breadcrumb: 'Home' }},
    {path: '', component: DashboardComponent, children:[
      {path:'address',loadChildren:()=>import('./address/address.module').then(a=>a.AddressModule),data: { breadcrumb: 'Address' }},
      {path:'edit-address',loadChildren:()=>import('./edit-address/edit-address.Module').then(a=>a.EditAddressModule),data: { breadcrumb: 'Edit-Address' }},
      {path:'profile-details',loadChildren:()=>import('./profile-details/profile-details.module').then(a=>a.ProfileDetailsModule),data: { breadcrumb: 'Profile' }},
      {path:'favourite',loadChildren:()=>import('./favourite/favourite.module').then(m=>m.FavouriteModule),data: { breadcrumb: 'Favourite' }},
    ]},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(m=>m.ShopModule),data: { breadcrumb: 'Shop' }},
  {path:'about-us',loadChildren:()=>import('./about-us/about-us.module').then(a=>a.AboutUsModule),data: { breadcrumb: 'About-Us' }},
  {path:'contact-us',loadChildren:()=>import('./contact-us/contact-us.module').then(a=>a.ContactUsModule),data: { breadcrumb: 'Contact Us' }},
  {path:'basket',loadChildren:()=>import('./basket/basket.module').then(m=>m.BasketModule),data: { breadcrumb: 'CheckOut' }},


  {path:'checkout',loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule),data: { breadcrumb: 'CheckOut' }},
  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
