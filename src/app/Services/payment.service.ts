import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../Models/Address';
import { Payment } from '../Models/Payment';
import { addUserPayment } from '../Models/ServerRoutingUrls';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 

  constructor(private http:HttpClient) { }

  addPayment(payment: Payment):Observable<any>{
    console.log(  "payment:- " + payment.cardHolderName)
    return this.http.post(addUserPayment,payment)
    
  }

  
}
