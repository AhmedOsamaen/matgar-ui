import { OrderProduct } from './../../Models/OrderProduct';
import { Product } from './../../Modules/product';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatgarPathsEnum } from 'src/app/Models/RoutingUrls';
import { ProductCart } from 'src/app/Models/ProductCart';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  productsList:any=[]
  constructor(private productService:ProductsService , private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params:any) => {
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
  GetProductDetails(id:any){
    this.router.navigate([MatgarPathsEnum.productDetails+'/', id]);
  }

  deleteProduct(id:string){
     this.productService.deleteProduct(+id).subscribe(response=>{
      this.getAllProducts();
    })
  }

  addItemToCart(product:ProductCart){
    //! saved order id is 24
    console.log('product :>> ', product);
    const productOrder :OrderProduct ={order:{id:24},product:{id:product.id}} 
    product.cartItemsCount?product.cartItemsCount++:product.cartItemsCount=1;
    this.productService.addProductToOrder(productOrder).subscribe(response=>{
    this.productService.cartItems.next('add');
      console.log('saved Successfully :>> ');
    })
  }
  removeItemFromCart(product:ProductCart){
     //! saved order id is 24
     console.log('product :>> ', product);
     const productOrder :OrderProduct ={order:{id:24},product:{id:product.id}} 
     
     this.productService.deleteProductFromOrder(productOrder).subscribe(response=>{
      product.cartItemsCount--;
      this.productService.cartItems.next('sub');
       console.log('deleted Successfully :>> ');
     })
  }

}
