import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatgarPathsEnum } from 'src/app/Models/RoutingUrls';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  productsList=[{id:"18",name:'Lenovo 1234',shortDescription:'Lenovo Lap',longDescription:'Laptop For Gamers and Non Gamers',price:'124',images:'www'}]
  constructor(private productService:ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    return this.productService.getAllProducts().subscribe(response=>{
      this.productsList=response;
    })
  }
  GetProductDetails(id:any){
    this.router.navigate([MatgarPathsEnum.productDetails+'/', id]);
  }
}
