import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modules/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/Modules/store';
import { StoreService } from './../../Services/store.service';
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

  constructor(private productService:ProductsService,private storeService : StoreService,private route: ActivatedRoute) { }

  storeId: any;

  ngOnInit(): void {
    this.route.url.subscribe(url => {this.storeId = url[1].toString();});
    this.storeService.getAllStores().subscribe( (data: Store[]) => {
      console.log(data)
      this.stores = data;
    });
  }
 
  getStores():Store[]{
    
    return this.stores;
  }
  submit():void{
    
    console.log(" save product ")
    
    console.log(this.product.name)
    let prod: any = this.product;
    prod["store"] = { "id": this.storeId};
    // console.log(this.product.store.id)
    this.productService.addProduct(prod).subscribe( (data: any) => {
      console.log(data)
      
    });
  }
}
