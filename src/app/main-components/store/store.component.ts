import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeList=[{name:'Lenovo 1234',id:'123'}]
  constructor(private storeService:StoreService ,private router: Router) { }

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
  this.router.navigate(['products-search'], navigationExtras);
}

}
