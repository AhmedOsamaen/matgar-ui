import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Address } from '../Models/Address';
import { Payment } from '../Models/Payment';
import { addUserPayments, getUserPayments} from '../Models/ServerRoutingUrls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient) { }

  
  getUserPayments(id: any){
    return this.http.get<[]>(getUserPayments+id)
  }

  addPayments(id: any,payment: String[]):Observable<any>{
    console.log("id:- " + id + "payment:- " + payment)
    return this.http.post(addUserPayments+id,payment)
    
  }

  
  
}
