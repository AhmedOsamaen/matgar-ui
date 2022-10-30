import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addStore , deleteStoreById, getAllStores } from '../Models/ServerRoutingUrls';
import { Store } from '../Modules/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  getAllStores(){
    return this.http.get<[]>(getAllStores)
  }

  deleteStore(storeId:Number){
    return this.http.get(deleteStoreById+storeId,{responseType:'text'})
  }

  addStore(store:Store):Observable<any>{
    return this.http.post(addStore,store)
  }
}
