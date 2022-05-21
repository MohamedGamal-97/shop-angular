import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAddressComponent } from './edit-address.component';


const routes:Routes=[
  {path:'',component:EditAddressComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EditAddressRoutingModule { }
