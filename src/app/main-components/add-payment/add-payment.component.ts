import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/app/Models/Payment';
import { User } from 'src/app/Modules/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) { }

  ngOnInit(): void {

  }
  @ViewChild('f') form: any;
  CardholderName: string = '';
  payment : Payment = new Payment();
  
  add(){
    for(let i of this.form.nativeElement){
      if( i.name ==="cardHolderName" ){
        this.payment.cardHolderName = i.value
        
      }
      if( i.name ==="cardNumber" ){
        this.payment.cardNumber = i.value
        
      }
      if( i.name ==="last_three_number_back" ){
        this.payment.last_three_number_back = i.value
        
      }
  }

    console.log("cardHolderName :- " + this.payment.cardHolderName)
    console.log("cardNumber :- " + this.payment.cardNumber)
    console.log("last_three_number_back :- " + this.payment.last_three_number_back)
    this.payment.user = this.data.user
    
    return this.userService.addPayment(this.payment).subscribe( (data: any) => {
      console.log(data)
      this.dialog.closeAll
    });
  }
}
