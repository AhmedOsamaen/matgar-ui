import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { AddProductsComponent } from './main-components/add-products/add-products.component';
import { MatgarPathsEnum } from './Models/RoutingUrls';

const routes: Routes = [
  { path: MatgarPathsEnum.productsSearch, component: ProductsSearchComponent},
  { path: MatgarPathsEnum.addProducts, component: AddProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
