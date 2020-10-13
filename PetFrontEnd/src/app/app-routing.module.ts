import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/productDetail/productDetail.component';
import {AuthGuard} from './auth.guard';
import {VetportalComponent} from './vetportal/vetportal.component';
import {RevenueManageComponent} from './revenue-manage/revenue-manage.component';

const routes: Routes = [
  {
    path: 'home', // no / in this path!!!
    component: HomeComponent
  },
  {
    path: 'login', // no / in this path!!!
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'vetportal',
    component: VetportalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'revenue',
    component: RevenueManageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
