import { Component, OnInit } from '@angular/core';
import { BackAPIsService } from 'src/app/services/back-apis.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private backAPIsService:BackAPIsService) { }

  product:any;
  ngOnInit(): void {
    this.backAPIsService.getProductByID("18").subscribe(x=>{
      console.log("Product:",x)
      this.product=x;
    })
  }

}
