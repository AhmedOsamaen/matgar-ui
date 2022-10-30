import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatgarPathsEnum } from 'src/app/Models/RoutingUrls';
import { BackAPIsService } from 'src/app/services/back-apis.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  storeId="5";
  constructor(private backAPIsService:BackAPIsService,private route: ActivatedRoute, private router: Router) { }
  store:any;
  ngOnInit(): void {
    this.backAPIsService.getStoreByID(this.storeId).subscribe(x=>{
      console.log("Store:",x)
      this.store=x;
    })
  }


  AddProductToStore(){
    this.router.navigate([MatgarPathsEnum.addProducts+'/', this.storeId]);
  }
  
  GetAllProductsInStore(){}
  
  EditStore(){}

  DeleteCurrentStoreAndReturnToUserStores(){}
}
