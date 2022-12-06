import { Payment } from "../Models/Payment";

export class User{
   
    public id!:Number;
    public name?:String;
    public age?:Number;
    public email?:String;
    public username?:String;
    public password?:String;
    public payment?:Payment;
    constructor(
    ){}
    
}