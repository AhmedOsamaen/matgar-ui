import { Product } from './../Modules/product';
export class ProductCart extends Product{
    
    constructor(public cartItemsCount:number){
        super();
    }
}