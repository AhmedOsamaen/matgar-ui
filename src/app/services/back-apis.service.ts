import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackAPIsService {

  constructor(private http: HttpClient) { }
  getProductByID(Id:any){
    return this.http.get<any>("http://localhost:8080/getProductById/"+Id);
  }
}
