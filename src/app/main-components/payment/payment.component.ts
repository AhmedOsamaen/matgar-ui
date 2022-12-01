import { Inject} from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Models/Payment';
import { UserService } from 'src/app/Services/user.service';
import { AddPaymentComponent } from '../add-payment/add-payment.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog,private userService:UserService) { }

  ngOnInit(): void {
    this.getPaymentss()
  }

  name=""
  animal=""
  openDialog(): void {
    
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '35%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  payments: Payment[] = [];
 
  getPaymentss() {
    
    this.userService.getUserPayments("13").subscribe( (data: Payment[]) => {
      console.log(data)
      this.payments =  data
    });
    return this.payments;
  }
  getPayments(){
    
    
    return this.payments; 
  }
  // addPaymentCard():void{
   
  //   this.router.navigate(['addPayment']);
    
  // }
}
