import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Address } from '../Models/Address';
import { Payment } from '../Models/Payment';
import { addUserPayment, getUserPayments , getUserById, getUserOrders, getUserOrdersStage} from '../Models/ServerRoutingUrls';
import { Stage } from '../Modules/stage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient) { }

  getUserById(id:any){
    return this.http.get<[]>(getUserById+id)
  }

  getUserPayments(id: any){
    return this.http.get<[]>(getUserPayments+id)
  }

  getUserOrders(id: any){
    return this.http.get<[]>(getUserOrders+id)
  }

  getUserOrdersStage(id: any,stage:String):Observable<any>{
    return this.http.post(getUserOrdersStage+id,stage)
  }

  

  
  
}
