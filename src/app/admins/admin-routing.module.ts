import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Add/add.component';
//import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  //{path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
