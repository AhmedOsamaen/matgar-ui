import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './main-components/product-details/product-details.component';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { AddProductsComponent } from './main-components/add-products/add-products.component';
import { AddStoresComponent } from './main-components/add-stores/add-stores.component';
import { MatgarPathsEnum } from './Models/RoutingUrls';
import { StoreDetailsComponent } from './main-components/store-details/store-details.component';
import { StoreComponent } from './main-components/store/store.component';
import { AddressComponent } from './main-components/address/address.component';
import { PaymentComponent } from './main-components/payment/payment.component';
import { AddPaymentComponent } from './main-components/payment/add-payment/add-payment.component';

const routes: Routes = [
  { path: MatgarPathsEnum.productsSearch, component: ProductsSearchComponent},
  { path: MatgarPathsEnum.productDetails+ '/:caserk', component: ProductDetailsComponent},
  { path: MatgarPathsEnum.addProducts+ '/:caserk', component: AddProductsComponent},
  { path: MatgarPathsEnum.storeDetails, component: StoreDetailsComponent},
  { path: MatgarPathsEnum.store, component: StoreComponent},
  { path: MatgarPathsEnum.addStore, component: AddStoresComponent},
  { path: MatgarPathsEnum.address, component: AddressComponent},
  { path: MatgarPathsEnum.payment, component: PaymentComponent},
  { path: MatgarPathsEnum.addPayment, component: AddPaymentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
