import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MatgarPathsEnum } from 'src/app/Models/RoutingUrls';
import { BackAPIsService } from 'src/app/services/back-apis.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  storeId = "5";
  constructor(private storeService:StoreService ,private backAPIsService: BackAPIsService, private route: ActivatedRoute, private router: Router) { }
  store: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params['id'] != null) {
        this.storeId = params['id'];
        console.log("params:::", this.storeId);
      }
      this.backAPIsService.getStoreByID(this.storeId).subscribe(x => {
        console.log("Store:", x)
        this.store = x;
      })
    });
  }


  AddProductToStore() {
    this.router.navigate([MatgarPathsEnum.addProducts + '/', this.storeId]);
  }

  GetAllProductsInStore() { 
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: this.storeId
      }
  }
  this.router.navigate([MatgarPathsEnum.productsSearch], navigationExtras);
  }

  EditStore() { }

  DeleteCurrentStoreAndReturnToUserStores() { 
    this.storeService.deleteStore(+this.storeId).subscribe(response=>{
      this.router.navigate([MatgarPathsEnum.store]);
    })
  }
}
