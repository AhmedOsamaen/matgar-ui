import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modules/product';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  public product = new Product();
  private products: Product[] = [];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
   
    this.productService.getAllProducts().subscribe( (data: Product[]) => {
      console.log(data)
      this.products = data;
    });
  }
 
  submit():void{
    
    console.log(" save ")
    
    console.log(this.product.name)
    this.productService.addProduct(this.product).subscribe( (data: any) => {
      console.log(data)
      this.productService.getAllProducts().subscribe( (data: Product[]) => {
        console.log(data)
        this.products = data;
      });
      // this.products = data;
    });
  }
}
