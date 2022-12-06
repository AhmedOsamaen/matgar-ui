import { User } from "../Modules/User";

export class Payment{
    

    public id!:Number;
    public cardNumber?: string;
    public cardHolderName?: string;
    public expireDate?: Date;
    public last_three_number_back?: Number;
    public user?:User;
    constructor(
    ){}
}