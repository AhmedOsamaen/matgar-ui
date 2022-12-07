import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,Subject} from 'rxjs';
import { Order } from '../Models/Order';
import { OrderProduct } from '../Models/OrderProduct';
import { addorder_product, addProduct, deleteOrderProduct, deleteProductById, getAllProducts ,getCartCount,getCartCountByOrderAndProduct,getProductByStoreId, getProductsByOrderId} from '../Models/ServerRoutingUrls';
import { Product } from '../Modules/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartItems= new Subject<string>();
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<[]>(getAllProducts)
  }

  getCartProducts(order:Order){
    return this.http.post<number>(getCartCount,order)
  }
  getCartProductsByOrderAndProduct(order:OrderProduct){
    return this.http.post<number>(getCartCountByOrderAndProduct,order)
  }
  addProduct(product:Product):Observable<any>{
    console.log(" addProduct ")
    // let url = this.base_url + "addProduct"
//     return this.http.post(addProduct,product)
    
// }
    return this.http.post(addProduct,product)
  }

  addProductToOrder(orderProduct:OrderProduct){
    return this.http.post(addorder_product,orderProduct)
  }

  deleteProduct(productId:Number){
    return this.http.get(deleteProductById+productId,{responseType:'text'})
  }

  deleteProductFromOrder(order:OrderProduct){
    return this.http.post(deleteOrderProduct,order,{responseType:'text'})
  }
  getProductByStoreId(storeId:Number){
    return this.http.get<[]>(getProductByStoreId+storeId)
  }
  getProductsByOrderId(order:Order):Observable<OrderProduct[]>{
    return this.http.post<OrderProduct[]>(getProductsByOrderId,order)
  }
}
