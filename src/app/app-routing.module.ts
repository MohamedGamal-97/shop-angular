import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';




import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data: { breadcrumb: 'Home' }},
    {path: '', component: DashboardComponent, children:[
      {path:'address',loadChildren:()=>import('./address/address.module').then(a=>a.AddressModule),canActivate: [AuthGuard],data: { breadcrumb: 'Address' }},
      {path:'edit-address',loadChildren:()=>import('./edit-address/edit-address.Module').then(a=>a.EditAddressModule),canActivate: [AuthGuard],data: { breadcrumb: 'Edit-Address' }},
      {path:'profile-details',loadChildren:()=>import('./profile-details/profile-details.module').then(a=>a.ProfileDetailsModule),canActivate: [AuthGuard],data: { breadcrumb: 'Profile' }},
      {path:'favourite',loadChildren:()=>import('./favourite/favourite.module').then(m=>m.FavouriteModule),canActivate: [AuthGuard],data: { breadcrumb: 'Favourite' }},
    ]},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(m=>m.ShopModule),data: { breadcrumb: 'Shop' }},
  {path:'about-us',loadChildren:()=>import('./about-us/about-us.module').then(a=>a.AboutUsModule),data: { breadcrumb: 'About-Us' }},
  {path:'contact-us',loadChildren:()=>import('./contact-us/contact-us.module').then(a=>a.ContactUsModule),data: { breadcrumb: 'Contact Us' }},
  {path:'basket',loadChildren:()=>import('./basket/basket.module').then(m=>m.BasketModule),data: { breadcrumb: 'basket' }},
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    data: { breadcrumb: 'Checkout' }
  },
  {
    path: 'orders', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./orders/order.module').then(mod => mod.OrdersModule),
    data: { breadcrumb: 'Orders' }
  },
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    data: { breadcrumb: {skip: true} }
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
