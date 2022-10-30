import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modules/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  public product = new Product();
  backAPIsService: any;
  // private products: Product[] = [];

  constructor(private productService: ProductsService, private route: ActivatedRoute,
    private router: Router) { }

  storeId: any;

  ngOnInit(): void {
    this.route.url.subscribe(url => {this.storeId = url[1].toString();});
  }

  submit(): void {

    console.log(" save ")

    console.log(this.product.name)
    let prod: any = this.product;
    prod["store"] = { "id": this.storeId};
    // prod["store_id"]="5";
    console.log("prod::", prod);
    this.productService.addProduct(prod).subscribe((data: any) => {
      console.log(data)
      // this.productService.getAllProducts().subscribe((data: Product[]) => {
      //   console.log(data)
      //   this.products = data;
      // });
      // this.products = data;
    });
  }
}
