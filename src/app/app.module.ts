import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/Material.module';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { ProductDetailsComponent } from './main-components/product-details/product-details.component';
import { ProductsService } from './Services/products.service';

import { AddProductsComponent } from './main-components/add-products/add-products.component';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDetailsComponent } from './main-components/store-details/store-details.component';
import { StoreComponent } from './main-components/store/store.component';
import { StoreService } from './Services/store.service';
import { AddStoresComponent } from './main-components/add-stores/add-stores.component';
import { AddressComponent } from './main-components/address/address.component';
import { PaymentService } from './Services/payment.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsSearchComponent,
    ProductDetailsComponent,
    AddProductsComponent,
    StoreDetailsComponent,
    StoreComponent,
    AddStoresComponent,
    AddressComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ProductsService,StoreService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
