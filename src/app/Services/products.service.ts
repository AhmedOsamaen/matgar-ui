import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addProduct, getAllProducts } from '../Models/ServerRoutingUrls';
import { Product } from '../Modules/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<[]>(getAllProducts)
  }

  addProduct(product:Product):Observable<any>{
    console.log(" addProduct ")
    // let url = this.base_url + "addProduct"
    return this.http.post(addProduct,product)
    
}
}
