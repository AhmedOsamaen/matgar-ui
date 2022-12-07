import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MatgarPathsEnum } from 'src/app/Models/RoutingUrls';
import { ProductsService } from 'src/app/Services/products.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class CartComponent implements OnInit {
  storeList:any=[]
  constructor(private storeService:StoreService ,private productService:ProductsService ,private router: Router) { }

  ngOnInit(): void {
    this.getAllStores()
  }

  getAllStores(){
    return this.storeService.getAllStores().subscribe(response=>{
      this.storeList=response;
    })
  }

  deleteStore(id:string){
    this.storeService.deleteStore(+id).subscribe(response=>{
     this.getAllStores();
   })
 }

 navigate(id:string) {
  let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
  }
  this.router.navigate([MatgarPathsEnum.storeDetails], navigationExtras);
}

}
