import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../Models/Address';
import { getAddressByUserId, getAllAddresses, saveAddressUrl } from '../Models/ServerRoutingUrls';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
 

  constructor(private http:HttpClient) { }

  getAllAddresses(){
    return this.http.get<[]>(getAllAddresses)
  }

  getAllAddressesById(id: any) {
    return this.http.get<[]>(getAddressByUserId+id)
  }

  addAddress(address:Address){
    return this.http.post(saveAddressUrl,address,{responseType:'text'});
  }

  
}
