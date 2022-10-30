import { Store } from "./store";

export class Product{
    public name!: string;
    public shortDescription!: string;
    public longDescription!: string;
    public price!: string;
    public quantity!: string;
    public discount!: string;
    public maximumDiscountValue!: string;
    public store!:Store;
    constructor(
    ){}
    
}