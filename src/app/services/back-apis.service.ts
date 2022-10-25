import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackAPIsService {

  constructor(private http: HttpClient) { }
  getProductByID(Id:any){
    return this.http.get<any>(environment.serverUrl+"getProductById/"+Id);
  }
}
