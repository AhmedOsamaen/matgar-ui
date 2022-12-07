import { Order } from './../../Models/Order';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Stage } from 'src/app/Modules/stage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemsCount:number=0;
  constructor(private productService:ProductsService,private userService:UserService) { }
  order: any;

  ngOnInit(): void {
    
    this.productService.cartItems.subscribe(result=>{
      if(result=='add'){
        this.cartItemsCount++;
      }else{
        this.cartItemsCount--;
      }
    })
  }

  getUserOrder_Cart(){
    
    this.userService.getUserOrdersStage(13,Stage.CART).subscribe(response=>{
      this.order = response
      this.getCartCount();
    })
  }

  getCartCount(){
    this.productService.getCartProducts(this.order).subscribe(response=>{
      this.cartItemsCount=response;
    })
    // const req:Order = {id:24}
    
  }
}
