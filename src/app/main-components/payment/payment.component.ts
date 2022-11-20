import { Inject} from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPaymentComponent } from '../add-payment/add-payment.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
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

  addPaymentCard():void{
   
    this.router.navigate(['addPayment']);
    
  }
}
