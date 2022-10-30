import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  productsList:any=[]
  constructor(private productService:ProductsService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if(params['id']!=null){
        console.log("params");
        console.log(params);
        console.log(params['id']);
        this.getProductByStoreId(Number(params['id']))
      }else{
        this.getAllProducts()
      }
     
  });
  }
  getProductByStoreId(id:Number){
    return this.productService.getProductByStoreId(id).subscribe(response=>{
      this.productsList=response;
    })
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
