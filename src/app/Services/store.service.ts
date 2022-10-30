import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deleteStoreById, getAllStores } from '../Models/ServerRoutingUrls';

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
}
