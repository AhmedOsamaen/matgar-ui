import { User } from "../Modules/User";

export class Payment{
    

    public id?:Number;
    public cardNumber?: string;
    public cardHolderName?: string;
    public expireDate?: string;
    public last_three_number_back?: string;
    public user?:User={id:13};
    constructor(
    ){}
}