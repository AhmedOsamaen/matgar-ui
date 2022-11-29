import { ActivatedRoute } from '@angular/router';
import { Address } from './../../../Models/Address';
import { PaymentService } from './../../../Services/payment.service';
import { Component, OnInit,Output,EventEmitter,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit,OnChanges {
  addressList:any=[]
  address:Address = new Address;
  choosenAddress:Address = new Address;
  userId="";
  addressSection=false;

  @Output() selectedForm= new EventEmitter<Address>();
  @Input() newAddress = new Address();
  constructor(
    private paymentService:PaymentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('defaultAddress')){
      console.log('object :>> ', (JSON.parse(localStorage.getItem('defaultAddress')as string)) as Address);
      this.choosenAddress= (JSON.parse(localStorage.getItem('defaultAddress')as string)) as Address ;
    }
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

  ngOnChanges() {
    if(this.userId){
      this.getAllAddressesForUser()
    }else{
      this.getAllAddresses()
    }
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

  updateForm(addressItem:Address){
    this.selectedForm.emit(addressItem);
  }
  setAddress(addressItem:Address,event:boolean){
    console.log('event :>> ', event);
    if(event){
      this.choosenAddress=addressItem;
    }else{
      this.choosenAddress= new Address();
    }
    localStorage.setItem('defaultAddress',JSON.stringify(this.choosenAddress));
  }
  deleteAddress(id:any){

  }


}
