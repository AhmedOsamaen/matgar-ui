import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressList:any=[]
  address:Address = new Address;
  userId="";
  addressSection=false;
  @ViewChild('form') addressForm!:NgForm;
  constructor(private route: ActivatedRoute,
    private paymentService:PaymentService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
        this.userId= url[1].toString();
        if(this.userId){
          this.getAllAddressesForUser()
        }else{
          this.getAllAddresses()
        }
      }
    );
  }

  getAllAddresses(){
    return this.paymentService.getAllAddresses().subscribe(response=>{
      this.addressList=response;
    })
  }
  getAllAddressesForUser(){
    return this.paymentService.getAllAddressesById(this.userId).subscribe(response=>{
      this.addressList=response;
    })
  }
  deleteAddress(id:any){

  }
  saveAddressToUser(){
    return this.paymentService.addAddress(this.address).subscribe(response=>{
      this.snackBar.open(response,'Close',{verticalPosition:'top' ,duration:2000})
      this.getAllAddressesForUser()
      this.clearForm();
    })
  }
  updateForm(addressItem:Address){
    this.address=JSON.parse(JSON.stringify(addressItem));
    this.addressSection=true;
  }
  clearForm(){
    this.addressForm.resetForm();
    var member:any;
    this.address=new Address;
  }

}
