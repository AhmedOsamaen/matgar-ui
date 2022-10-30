import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addProduct, deleteProductById, getAllProducts } from '../Models/ServerRoutingUrls';
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
    return this.http.post(addProduct,product)
  }

  deleteProduct(productId:Number){
    return this.http.get(deleteProductById+productId,{responseType:'text'})
  }
}
