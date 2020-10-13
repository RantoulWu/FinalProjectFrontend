import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CustomStyleModule} from './shared/modules/custom-style/custom-style.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductsComponent } from './products/products.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { PaymentComponent } from './payment/payment.component';
import { RevenueManageComponent } from './revenue-manage/revenue-manage.component';
import {ProductOverviewComponent} from './products/productOverview/productOverview.product';
import {ProductsService} from './shared/services/products.service';
import {ProductDetailComponent} from './products/productDetail/productDetail.component';
import {CategoryPipe} from './shared/pipes/category-pipe';
import {FilterNamePipe} from './shared/pipes/filter-name-pipe';
import { VetportalComponent } from './vetportal/vetportal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    ProductsComponent,
    ProductOverviewComponent,
    ProductDetailComponent,
    UserManageComponent,
    PaymentComponent,
    RevenueManageComponent,
    CategoryPipe,
    FilterNamePipe,
    VetportalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule used after angular 4.3,  before it's called httpModule
    HttpClientModule,
    BrowserAnimationsModule,
    CustomStyleModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
