import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,Subject} from 'rxjs';
import { Order } from '../Models/Order';
import { OrderProduct } from '../Models/OrderProduct';
import { addorder_product, addProduct, deleteOrder, deleteOrderProduct, deleteProductById, getAllOrders, getAllProducts ,getCartCount,getCartCountByOrderAndProduct,getProductByStoreId, saveOrder} from '../Models/ServerRoutingUrls';
import { Product } from '../Modules/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cartItems= new Subject<string>();
  constructor(private http:HttpClient) { }

  getAllOrders(){
    return this.http.get<[]>(getAllOrders)
  }
  saveOrder(order:Order):Observable<any>{
    console.log(" saveOrder ")
    return this.http.post(saveOrder,order)
  }

  deleteOrder(orderId:Number){
    return this.http.get(deleteOrder+orderId,{responseType:'text'})
  }

//   getCartProducts(order:Order){
//     return this.http.post<number>(getCartCount,order)
//   }
//   getCartProductsByOrderAndProduct(order:OrderProduct){
//     return this.http.post<number>(getCartCountByOrderAndProduct,order)
//   }
  

//   addProductToOrder(orderProduct:OrderProduct){
//     return this.http.post(addorder_product,orderProduct)
//   }

  

  deleteProductFromOrder(order:OrderProduct){
    return this.http.post(deleteOrderProduct,order,{responseType:'text'})
  }
  getProductByStoreId(storeId:Number){
    return this.http.get<[]>(getProductByStoreId+storeId)
  }
}
