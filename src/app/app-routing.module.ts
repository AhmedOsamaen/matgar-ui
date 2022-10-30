import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './main-components/product-details/product-details.component';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { AddProductsComponent } from './main-components/add-products/add-products.component';
import { MatgarPathsEnum } from './Models/RoutingUrls';
import { StoreDetailsComponent } from './main-components/store-details/store-details.component';

const routes: Routes = [
  { path: MatgarPathsEnum.productsSearch, component: ProductsSearchComponent},
  { path: MatgarPathsEnum.productDetails+ '/:caserk', component: ProductDetailsComponent},
  { path: MatgarPathsEnum.addProducts+ '/:caserk', component: AddProductsComponent},
  { path: MatgarPathsEnum.storeDetails, component: StoreDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
