
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ObserversModule } from "@angular/cdk/observers";
import { Product } from "../Modules/product";
import { Observable } from "rxjs";
import { AddProductsComponent } from "../main-components/add-products/add-products.component";
@Injectable({
    providedIn : 'root'
})
export class ProductService{
    private base_url= "http://localhost:8080/"
    constructor(private http:HttpClient){}

    getProducts():Observable<Product[]>{{
        let url = this.base_url + "getAllProducts"
        return this.http.get<Product[]>(url)
    }}

    addProduct(product:Product):Observable<any>{
        console.log(" addProduct ")
        let url = this.base_url + "addProduct"
        return this.http.post(url,{
            "name":product.name,
            "shortDescription":product.shortDescription,
            "longDescription":product.longDescription,
            "price":product.price,
            "quantity":product.quantity,
            "discount":product.discount,
            "maximumDiscountValue":product.maximumDiscountValue,
            "store":{"id": 1}
        })
        
    }
    
}