import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSearchComponent } from './main-components/products-search/products-search.component';
import { MatgarPathsEnum } from './Models/RoutingUrls';

const routes: Routes = [
  { path: MatgarPathsEnum.productsSearch, component: ProductsSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
