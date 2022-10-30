import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  productsList=[{name:'Lenovo 1234',shortDescription:'Lenovo Lap',longDescription:'Laptop For Gamers and Non Gamers',price:'124',images:'www',id:'123'}]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    return this.productService.getAllProducts().subscribe(response=>{
      this.productsList=response;
    })
  }

  deleteProduct(id:string){
     this.productService.deleteProduct(+id).subscribe(response=>{
      this.getAllProducts();
    })
  }

}
