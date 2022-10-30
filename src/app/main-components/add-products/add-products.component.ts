import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modules/product';
import { StoreService } from 'src/app/Services/store.service';
import { Store } from 'src/app/Modules/store';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  public product = new Product();
  private products: Product[] = [];
  private stores: Store[] = [];
  public id :Number =-1;
  constructor(private productService:ProductsService,private storeService : StoreService) { }

  ngOnInit(): void {
   
    this.storeService.getAllStores().subscribe( (data: Store[]) => {
      console.log(data)
      this.stores = data;
      
    });
    this.productService.getAllProducts().subscribe( (data: Product[]) => {
      console.log(data)
      this.products = data;
      console.log(this.products)
    });
  }
 
  getStores():Store[]{
    
    return this.stores;
  }
  submit():void{
    
    console.log(" save product ")
    
    console.log(this.product.name)
    let store = new Store();
    store.id = this.id;
    this.product.store = store;
    console.log(this.product.store.id)
    this.productService.addProduct(this.product).subscribe( (data: any) => {
      console.log(data)
      
    });
  }
}
