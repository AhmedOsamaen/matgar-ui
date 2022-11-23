import { Order } from './../../Models/Order';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemsCount:number=0;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getCartCount()
    this.productService.cartItems.subscribe(result=>{
      if(result=='add'){
        this.cartItemsCount++;
      }else{
        this.cartItemsCount--;
      }
    })
  }
  getCartCount(){
    const req:Order = {id:24}
    this.productService.getCartProducts(req).subscribe(response=>{
      this.cartItemsCount=response;
    })
  }
}
