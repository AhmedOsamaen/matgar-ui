import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackAPIsService } from 'src/app/services/back-apis.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private backAPIsService:BackAPIsService,private route: ActivatedRoute,
    private router: Router,) { }
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
        })
      }
    );
    
  }

}
