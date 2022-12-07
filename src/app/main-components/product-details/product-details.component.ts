import { Order } from './../../Models/Order';
import { BackAPIsService } from './../../Services/back-apis.service';
import { Product } from './../../Modules/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderProduct } from 'src/app/Models/OrderProduct';
import { UserService } from 'src/app/Services/user.service';
import { Stage } from 'src/app/Modules/stage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cartItemsCount:number=0;
  order: any;
  constructor(private backAPIsService:BackAPIsService,private route: ActivatedRoute,
    private router: Router,private productService:ProductsService,
    private userService:UserService) { }
  ID="18";
  product:any;
  ngOnInit(): void {

    this.route.url.subscribe(
      url => {
        const id = url[1].toString();
        console.log("url???????", id)

        if(id!=null&&id!=""){
          this.ID=id;
        }
        this.backAPIsService.getProductByID(this.ID).subscribe(x=>{
          console.log("Product:",x)
          this.product=x;
          this.getUserOrder_Cart();
        })

      }
    );
    
  }

  getUserOrder_Cart(){
    
    this.userService.getUserOrdersStage(13,Stage.CART).subscribe(response=>{
      this.order = response
      this.getCartCount();
    })
  }
  getCartCount(){
    const req:OrderProduct = {'order':this.order,'product':this.product}
    this.productService.getCartProductsByOrderAndProduct(req).subscribe(response=>{
      this.cartItemsCount=response;
    })
  }

  addItemToCart(product:Product){
    //! saved order id is 24
    console.log('product :>> ', product);
    const productOrder :OrderProduct ={order:this.order,product:product} 
    this.productService.addProductToOrder(productOrder).subscribe(response=>{
    this.cartItemsCount++;
    this.productService.cartItems.next('add');
      console.log('saved Successfully :>> ');
    })
  }
  removeItemFromCart(product:Product){
     //! saved order id is 24
     console.log('product :>> ', product);
     const productOrder :OrderProduct ={order:this.order,product:product} 
     
     this.productService.deleteProductFromOrder(productOrder).subscribe(response=>{
      this.cartItemsCount--;
      this.productService.cartItems.next('sub');
       console.log('deleted Successfully :>> ');
     })
  }

}
