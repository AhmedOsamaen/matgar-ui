import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllProducts } from '../Models/ServerRoutingUrls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<[]>(getAllProducts)
  }
}
