import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  CardholderName: string = '';
  payments : String[] = []
  get(){
   this.userService.getUserPayments("13").subscribe( (data: any) => {
    console.log(data)
    this.payments = data

  });
  }
  add(){
    console.log("45345dfgdfgg")
    this.payments.push(this.CardholderName)
    this.userService.addPayments(13,this.payments).subscribe( (data: any) => {
      console.log(data)
      
    });
  }
}
