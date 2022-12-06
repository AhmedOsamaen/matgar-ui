import { Inject} from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Models/Payment';
import { Product } from 'src/app/Modules/product';
import { User } from 'src/app/Modules/User';
import { UserService } from 'src/app/Services/user.service';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ProductsService } from './../../Services/products.service';

class Invoice{
  customerName: String | undefined;
  address: String | undefined;
  contactNo: number | undefined;
  email: String | undefined;
  
  
  additionalDetails: String | undefined;

  constructor(){
    // Initially one empty product row we will show 
    // this.products.push(new Product());
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog,private userService:UserService
    ,private productService:ProductsService) { }

 
  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'ELECTRONIC SHOP',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold:true
              },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: this.invoice.contactNo }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Bill No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Product', 'Price', 'Quantity', 'Amount'],
              // (p.price*p.quantity) (p.qty * p.price)
              ...this.products.map(p => ([p.name, p.price, p.quantity, (20*10).toFixed(2)])),
              [{text: 'Total Amount', colSpan: 3}, {}, {}, this.products.reduce((sum, p)=> sum + (20*10), 0).toFixed(2)]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
            text: this.invoice.additionalDetails,
            margin: [0, 0 ,0, 15]          
        },
        {
          columns: [
            [{ qr: `${this.invoice.customerName}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'Order can be return in max 10 days.',
              'Warrenty of the product will be subject to the manufacturer terms and conditions.',
              'This is system generated invoice.',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    // if(action==='download'){
    //   pdfMake.createPdf(docDefinition).download();
    // }else if(action === 'print'){
    //   pdfMake.createPdf(docDefinition).print();      
    // }else{
    //   pdfMake.createPdf(docDefinition).open();      
    // }

  }
  invoice:Invoice= new Invoice(); 
  addProduct(){
    this.products.push(new Product());
  }
  
  ngOnInit(): void {
    
    this.getPayments()
    this.getUserById()
    this.getAllProducts()
  }

  name=""
  animal=""
  openDialog(): void {
    
    const dialogRef = this.dialog.open(AddPaymentComponent, {
      width: '35%',
      data: {user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddPaymentComponent was closed' + result);
      this.payments = result
    });
  }
  products: any[] = [];
  productsEdit: Boolean[] = [];
  payments: Payment[] = [];
  user =  new User ;
  
  getUserById(){
    this.userService.getUserById("13").subscribe( (data: any) => {
      console.log(data)
      this.user =  data
      this.setDataUser()
    });
    return this.user;
  }
  setDataUser(){
    this.invoice.customerName = this.user.name
    this.invoice.email = this.user.email
    this.invoice.additionalDetails = "additionalDetails"
    this.invoice.address = "address"
    this.invoice.contactNo = 5
    
  }
  checkEdit = true
  edit(i:any){
    this.productsEdit[i] = !this.productsEdit[i]
  }
  
  getTotalQuantity(){
    let sum =0 
    this.products.forEach(product => {
      sum += product.quantity 
    });
    return sum
  }
  getTotalPrice(){
    let sum =0 
    this.products.forEach(product => {
      sum += ( product.price * product.quantity )
    });
    return sum
}
  calculatePrice(a:any,b:any){
    return a*b
  }
  getAllProducts(){
    return this.productService.getAllProducts().subscribe(response=>{
      this.products=response;
      this.products.forEach(product => {
        this.productsEdit.push(true)
      });
      
      console.log("this.productsEdit" + this.productsEdit)
    })
  }
  
  
  getPayments() {
    
   return this.userService.getUserPayments("13").subscribe(response=> {
      console.log(" sdsd " + response)
      this.payments =  response
    });
   
  }
  
  // addPaymentCard():void{
   
  //   this.router.navigate(['addPayment']);
    
  // }
}
