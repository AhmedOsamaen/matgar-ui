import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './main-components/product-details/product-details.component';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { AddProductsComponent } from './main-components/add-products/add-products.component';
import { MatgarPathsEnum } from './Models/RoutingUrls';

const routes: Routes = [
  { path: MatgarPathsEnum.productsSearch, component: ProductsSearchComponent},
  { path: MatgarPathsEnum.productDetails, component: ProductDetailsComponent},
  { path: MatgarPathsEnum.addProducts, component: AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
