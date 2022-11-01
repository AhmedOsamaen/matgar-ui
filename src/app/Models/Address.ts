import { Store } from "../Modules/store";
import { User } from "../Modules/User";

export class Address{
    public id?:Number;
    public street?: string;
    public buildingNum?: string;
    public country?: string;
    public state?: string;
    public city?: string;
    public town?: string;
    public fullAdrs?: string;
    public postalCode?:string;
    public store?:Store;
    public user?:User={id:12};
    constructor(
    ){}
}