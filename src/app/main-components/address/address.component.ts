import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { AddressService } from 'src/app/Services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressList:any=[]
  address:Address = new Address;
  sentNewaddress:Address = new Address;
  choosenAddress:Address = new Address;
  userId="";
  addressSection=false;
  @ViewChild('form') addressForm!:NgForm;
  constructor(private route: ActivatedRoute,
    private addressService:AddressService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('defaultAddress')){
      console.log('object :>> ', (JSON.parse(localStorage.getItem('defaultAddress')as string)) as Address);
      this.choosenAddress= (JSON.parse(localStorage.getItem('defaultAddress')as string)) as Address ;
    }
    this.route.url.subscribe(
      url => {
        this.userId= url[1].toString();
      }
    );
  }


  
  saveAddressToUser(){
    return this.addressService.addAddress(this.address).subscribe(response=>{
      this.snackBar.open(response,'Close',{verticalPosition:'top' ,duration:2000})
      // this.getAllAddressesForUser()
      this.sentNewaddress=JSON.parse(JSON.stringify(this.address));
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
