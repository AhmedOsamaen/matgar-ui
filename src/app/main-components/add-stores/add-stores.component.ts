import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Modules/store';
import { User } from 'src/app/Modules/User';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.css']
})
export class AddStoresComponent implements OnInit {

  public store = new Store();
  private stores: Store[] = [];
  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
   
    this.storeService.getAllStores().subscribe( (data: Store[]) => {
      console.log(data)
      this.stores = data;
    });
  }
 
  submit():void{
    
    console.log(" save ")
    
    console.log(this.store.name)
    let user =  new User();
    user.id = 12;
    this.store.user = user 
    this.storeService.addStore(this.store).subscribe( (data: any) => {
      console.log(data)
      this.storeService.getAllStores().subscribe( (data: Store[]) => {
        console.log(data)
        this.stores = data;
      });
      // this.products = data;
    });
  }
}
